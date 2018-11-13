import React from "react";
import Ad from "../../components/Ad";
import Helmet from "../../utils/Helmet";
import { renderComponent } from "../test-utils";

describe("Bind", () => {
  it("works", () => {
    const res = renderComponent(
      <Ad data-slot="xxxx" width="1150" height="160" type="doubleclick" />
    );
    expect(res.toJSON()).toMatchSnapshot();
  });

  it("injects the right script tag", () => {
    renderComponent(
      <Ad data-slot="xxxx" width="1150" height="160" type="doubleclick" />
    );
    Helmet.canUseDOM = false;
    const staticHead = Helmet.renderStatic();
    expect(staticHead.scriptTags).toMatchSnapshot();
  });
});
