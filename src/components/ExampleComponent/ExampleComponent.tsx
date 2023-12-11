import * as FEAAS from "@sitecore-feaas/clientside/react";
import React, { useEffect, useState } from "react";

export default function ExampleComponent(props: {
  firstName: string;
  lastName?: string;
  telephone?: string;
  bold?: boolean;
  children?: any;
}) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>ExampleComponent</h2>
      <dl style={props.bold ? { fontWeight: "bold" } : {}}>
        <dt>Description</dt>
        <dd>Interactive UI</dd>
        <dt>Rendered on</dt>
        <dd>Clientside</dd>
        <dt>Data</dt>
        <dd>
          {props.firstName} {props.lastName} / {props.telephone}
        </dd>
        <dt>Clientside hook</dt>
        <dd>
          <var>{counter}</var>s elapsed
        </dd>
        {props.children && props.children.length != 0 && (
          <>
            <dt>Children</dt>
            <dd>{props.children}</dd>
          </>
        )}
      </dl>
    </>
  );
}

FEAAS.registerComponent(ExampleComponent, {
  name: "example-only",
  title: "Example-only component",
  description: "Description of my example component",
  thumbnail:
    "https://feaasstatic.blob.core.windows.net/assets/thumbnails/byoc.svg",
  group: "Builder",
  required: ["firstName"],
  properties: {
    firstName: {
      type: "string",
      title: "First name",
    },
    lastName: {
      type: "string",
      title: "Last name",
    },
    telephone: {
      type: "number",
      title: "Telephone",
      minLength: 10,
    },
    bold: {
      type: "boolean",
      title: "Show text in bold weight",
    },
  },
  ui: {
    firstName: {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:placeholder": "Write your first name",
    },
    bold: {
      "ui:widget": "radio",
    },
  },
});