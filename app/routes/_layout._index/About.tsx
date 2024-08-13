import { Work } from "./Work";
import { Container } from "~/components/Container";

export const About = () => {
  return (
    <Container className="bg-background">
      <Container.Inner>
        <div
          id="about"
          className="mx-auto grid max-w-lg grid-cols-1 items-start gap-x-16 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2 text-foreground"
        >
          <Work />
          <div>
            <div className="text-base leading-7 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About me
              </h2>
              <div className="max-w-xl">
                <p className="mt-6">
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container.Inner>
    </Container>
  );
};
