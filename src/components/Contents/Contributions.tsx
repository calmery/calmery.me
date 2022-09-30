import { Column } from "~/components/Column";
import { ExternalLink } from "~/components/ExternalLink";
import { Heading } from "~/components/Heading";
import { Text } from "~/components/Text";

export const Contributions: React.FC = () => {
  return (
    <Column>
      <Heading icon="github" underline>
        コントリビューションなど
      </Heading>
      <Text>
        <ExternalLink href="https://github.com/search?q=author%3Acalmery+is%3Apr+-repo%3Acalmery%2Fcalmery.me+-repo%3Acalmery%2FCcpvApi+-repo%3Acalmery%2FCcpvApp+-repo%3Acalmery%2FCcpvDocs+-repo%3Acalmery%2FDataListJS+-repo%3Acalmery%2Felm-boilerplate+-repo%3Acalmery%2FLegacySpotlight+-repo%3Acalmery%2FTheater+-repo%3Acalmery-chan%2Fcalmery.moe+-repo%3Acalmery-chan%2Fcreamsoda.in+-repo%3Acalmery-chan%2Fmetaneno.art+-repo%3Ajphacks%2FFK_1801+-repo%3Anaoyasugita%2Fspotlight-server+-repo%3Anichikan%2Fnichikan.github.io+-repo%3Ayuyan0617%2Fyuyan0617.github.io&type=Issues">
          GitHub
        </ExternalLink>{" "}
        で確認できます。
      </Text>
    </Column>
  );
};
