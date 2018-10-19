// SCSS

require("./style.scss");

// Elm

const { Elm } = require("./elm/Main.elm");

const app = Elm.Main.init({
  node: document.getElementById("elm")
});

app.ports.setTitle.subscribe(title => (document.title = title));

// NOTE: 日付を JavaScript 側で整形する
// TODO: Elm 側でパースしたい

app.ports.parseQiita.subscribe(response => {
  const entries = JSON.parse(response).map(entry => {
    const { title, url } = entry;

    const tags = entry.tags.map(tag => {
      return tag.name;
    });

    const created_at = (() => {
      const createdAt = new Date(entry.created_at);

      const year = createdAt.getFullYear();
      const month = createdAt.getMonth() + 1;
      const date = createdAt.getDate();

      return `${year}/${month < 10 ? `0${month}` : month}/${date < 10 ? `0${date}` : date}`;
    })();

    return { title, url, created_at, tags };
  });

  app.ports.parsedQiita.send(JSON.stringify(entries));
});

// TODO: XML を JSON に変換して Elm に送る

app.ports.parseBlog.subscribe(response => {
  const parser = new DOMParser();
  const dom = parser.parseFromString(response, 'text/xml');

  const entries = [].slice.call(dom.getElementsByTagName('entry'), 0, 2).map(entry => {
    const title = entry.getElementsByTagName('title')[0].innerHTML;
    const url = entry.getElementsByTagName('link')[0].getAttribute('href');
    const tags = [].slice.call(entry.getElementsByTagName('category')).map(tag => tag.getAttribute('label'));
    const createdAt = new Date(entry.getElementsByTagName('published')[0].innerHTML);

    const date = (() => {
      const year = createdAt.getFullYear();
      const month = createdAt.getMonth() + 1;
      const date = createdAt.getDate();
      return `${year}/${month < 10 ? `0${month}` : month}/${date < 10 ? `0${date}` : date}`;
    })();

    return { title, url, tags, created_at: date };
  });

  app.ports.parsedBlog.send(JSON.stringify(entries));
});
