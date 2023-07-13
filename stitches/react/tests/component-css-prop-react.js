import * as React from "react"
import * as renderer from "react-test-renderer"

import { createStitches } from "../src/index.js"

const RenderOf = (...args) => {
  let Rendered

  void renderer.act(() => {
    Rendered = renderer.create(React.createElement(...args))
  })

  return Rendered.toJSON()
}

describe("React Component with CSS prop", () => {
  test("ABC", () => {
    expect(RenderOf("div", { className: "foobar" }, "hello")).toEqual({
      type: "div",
      props: { className: "foobar" },
      children: ["hello"],
    })
  })

  test("XYZ", () => {
    const { styled, toString } = createStitches({
      media: {
        bp2: "(min-width: 900px)",
      },
    })

    const StyledText = styled("span", {
      lineHeight: 1,
      margin: 0,
      fontWeight: 400,
      fontVariantNumeric: "tabular-nums",
      display: "block",
    })

    expect(RenderOf(StyledText, null, "Radix UI test suite")).toEqual({
      type: "span",
      props: { className: "fuel_bMUtqP" },
      children: ["Radix UI test suite"],
    })

    expect(toString()).toBe(
      "--sxs{--sxs:2 fuel_bMUtqP}@media{.fuel_bMUtqP{line-height:1;margin:0;font-weight:400;font-variant-numeric:tabular-nums;display:block}}",
    )

    const Title = React.forwardRef((props, forwardedRef) =>
      React.createElement(StyledText, {
        as: "span",
        ...props,
        ref: forwardedRef,
        css: {
          fontWeight: 500,
          fontVariantNumeric: "proportional-nums",
          lineHeight: "35px",
          ...props.css,
          "@bp2": {
            lineHeight: "55px",
            ...props.css?.["@bp2"],
          },
        },
      }),
    )

    expect(
      RenderOf(
        Title,
        {
          css: {
            textAlign: "center",
            marginBottom: "$3",
            "@bp2": {
              color: "red",
            },
          },
        },
        "Radix UI test suite",
      ),
    ).toEqual({
      type: "span",
      props: {
        className: "fuel_bMUtqP fuel_bMUtqP-ieTXEfC-css",
      },
      children: ["Radix UI test suite"],
    })

    expect(toString()).toBe(
      `--sxs{--sxs:2 fuel_bMUtqP}@media{.fuel_bMUtqP{line-height:1;margin:0;font-weight:400;font-variant-numeric:tabular-nums;display:block}}--sxs{--sxs:6 fuel_bMUtqP-ieTXEfC-css}@media{.fuel_bMUtqP-ieTXEfC-css{font-weight:500;font-variant-numeric:proportional-nums;line-height:35px;text-align:center;margin-bottom:var(--space-3)}@media (min-width: 900px){.fuel_bMUtqP-ieTXEfC-css{line-height:55px;color:red}}}`,
    )

    // ...
    const Link = styled("a", {
      [`& ${StyledText}`]: {
        color: "inherit",
      },
    })

    expect(RenderOf(Link, null, "Radix UI test suite")).toEqual({
      type: "a",
      props: {
        className: "fuel_dnnagC",
      },
      children: ["Radix UI test suite"],
    })

    expect(toString()).toBe(
      `--sxs{--sxs:2 fuel_bMUtqP fuel_dnnagC}@media{.fuel_bMUtqP{line-height:1;margin:0;font-weight:400;font-variant-numeric:tabular-nums;display:block}.fuel_dnnagC .fuel_bMUtqP{color:inherit}}--sxs{--sxs:6 fuel_bMUtqP-ieTXEfC-css}@media{.fuel_bMUtqP-ieTXEfC-css{font-weight:500;font-variant-numeric:proportional-nums;line-height:35px;text-align:center;margin-bottom:var(--space-3)}@media (min-width: 900px){.fuel_bMUtqP-ieTXEfC-css{line-height:55px;color:red}}}`,
    )
  })
})
