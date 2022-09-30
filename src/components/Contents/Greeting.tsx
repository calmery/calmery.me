import { Column } from "~/components/Column";
import { Heading } from "~/components/Heading";
import { Icon } from "~/components/Icon";

export const Greeting: React.FC = () => {
  return (
    <Column>
      <Heading>
        Hey <Icon icon="wave" inline size={20} />, I&rsquo;m Calmery !
      </Heading>
    </Column>
  );
};
