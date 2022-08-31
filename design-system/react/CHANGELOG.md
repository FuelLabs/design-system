# @fuel-ui/react

## 0.6.0

### Minor Changes

- ✨ Feat: add `<Avatar.Generated>` component. This component will generated an unique avatar svg image based in a hash value
  ````jsx
  <Avatar.Generated hash="0x760a9e947de58fbf133a1d0ec97ae9aa18adfe71" />
  ```, by [@pedronauck](https://github.com/pedronauck) (See [#127](https://github.com/FuelLabs/fuel-ui/pull/127))
  ````

### Patch Changes

- ✨ feat(AvatarGenerated): add `background` prop; apply rounded aspect, by [@LuizAsFight](https://github.com/LuizAsFight) (See [#131](https://github.com/FuelLabs/fuel-ui/pull/131))
- 🐞 Fix: improve typings for createComponent function, by [@pedronauck](https://github.com/pedronauck) (See [#134](https://github.com/FuelLabs/fuel-ui/pull/134))
- 🐞 Fix: use browser native Clipboard API instead of ReactUse on `<Clipboard>` component, by [@pedronauck](https://github.com/pedronauck) (See [#126](https://github.com/FuelLabs/fuel-ui/pull/126))

## 0.5.0

### Minor Changes

- ✨ Feat: add `<InputPassword>` component. This component already have element configured for a input password like a button to toggle password and a lock icon on left.
  ```jsx
  <InputPassword name="password" placeholder="Type your password">
  ```
- ✨ Feat: add new `<FuelLogo>` component, by [@pedronauck](https://github.com/pedronauck) (See [#123](https://github.com/FuelLabs/fuel-ui/pull/123))

### Patch Changes

- 🐞 Fix: remove usage of `asChild` on `<Focus.ArrowNavigator>`, by [@pedronauck](https://github.com/pedronauck) (See [#118](https://github.com/FuelLabs/fuel-ui/pull/118))
- 🐞 Fix: use `onClick` to fix `asChild` prop dilling on `<Button>`, by [@pedronauck](https://github.com/pedronauck) (See [#118](https://github.com/FuelLabs/fuel-ui/pull/118))

## 0.4.0

### Minor Changes

- ✨ Feat: add new `<Input.Number>` component that uses `react-number-format` under the hood to create a full numeric type input (all `react-number-format` props are allowed on this component)
  ```jsx
  <Input>
    <Input.Number name="amount" placeholder="0.0" inputMode="decimal" />
  </Input>
  ```

## 0.3.0

### Minor Changes

- ✨ Feat: add new `<CardList>` component, basically a list of cards that can be clickable and have right elements as actions.
  ```jsx
  <CardList {...args} css={{ maxW: "$md" }}>
    <CardList.Item isActive>
      <Avatar
        {...args}
        size="sm"
        name="Colm Tuite"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      />
      <Heading as="h6" css={{ margin: 0 }}>
        Colm Tuite
      </Heading>
    </CardList.Item>
  </CardList>
  ```

### Patch Changes

- 🐞 Fix: add contentProps and arrowProps for `<Popover>`, by [@pedronauck](https://github.com/pedronauck) (See [#108](https://github.com/FuelLabs/fuel-ui/pull/108))
- 🐞 Fix: resolve props passed as handlers for Button component, by [@pedronauck](https://github.com/pedronauck) (See [#112](https://github.com/FuelLabs/fuel-ui/pull/112))
- 🐞 Fix: add css prop for `<Menu>`, by [@pedronauck](https://github.com/pedronauck) (See [#108](https://github.com/FuelLabs/fuel-ui/pull/108))

## 0.2.0

### Minor Changes

- ✨ Feat: add a custom prop on ThemeProvider to don't load fonts by default, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))
- ✨ Feat: use Phosphor icons instead of Radix Icons, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))
- ✨ Feat: accept a theme object for custom theme on `<ThemeProvider>`, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))

### Patch Changes

- 🐞 Fix: check if window is undefined for SSR purposes, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))
- 🐞 Fix: add value prop for `<Copyable>`, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))
- 💅🏻 Style: general adjustments according to Figma design specs, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))
- 🐞 Fix: pass machine for useMachine on ThemeProvider in a right way, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))
- Updated dependencies (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105), [#105](https://github.com/FuelLabs/fuel-ui/pull/105), and [#105](https://github.com/FuelLabs/fuel-ui/pull/105))
  - @fuel-ui/css@0.2.0
  - @fuel-ui/test-utils@0.2.0

## 0.1.1

### Patch Changes

- 🐞 Fix: export missing FocusScopeProps on Focus component, by [@pedronauck](https://github.com/pedronauck) (See [#102](https://github.com/FuelLabs/fuel-ui/pull/102))

## 0.1.0

### Minor Changes

- ✨ Feat: add `<Menu />` component using React Aria [useMenu()](https://react-spectrum.adobe.com/react-aria/useMenu.html) as base to create it
  ```jsx
  <Menu autoFocus disabledKeys={["edit"]} aria-label="Actions">
    <Menu.Item key="settings" textValue="Settings">
      Settings
    </Menu.Item>
    <Menu.Item key="trash" textValue="Delete">
      Delete
    </Menu.Item>
    <Menu.Item key="edit" textValue="Edit">
      Edit
    </Menu.Item>
  </Menu>
  ```
- ✨ Feat: add a `<Image />` component, by [@pedronauck](https://github.com/pedronauck) (See [#89](https://github.com/FuelLabs/fuel-ui/pull/89))
- ✨ Feat: add new `<HelperIcon />`, a component that will show a helper icon with a Tooltip included
  ```jsx
  <HelperIcon message="This is a helper message">Some information</HelperIcon>
  ```
- ✨ Feat: add `<Focus.ArrowNavigator />` component, a component that create a focus scope and add focus navigation using arrows automatically on children.
  ```jsx
  <Focus.ArrowNavigator asChild autoFocus>
    <Stack gap="$3" direction="row">
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </Stack>
  </Focus.ArrowNavigator>
  ```
- ✨ Feat: add new `<Accordion />` component using [Radix Accordion](https://www.radix-ui.com/docs/primitives/components/accordion) as base component
  ```jsx
  <Accordion {...args} type="single" defaultValue="item-1" collapsible>
    <Accordion.Item value="item-1">
      <Accordion.Trigger>What&apos; Fuel?</Accordion.Trigger>
      <Accordion.Content>
        The fastest execution modular blokchain
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2">
      <Accordion.Trigger>Is really fast?</Accordion.Trigger>
      <Accordion.Content>Yes, blazingly fast!</Accordion.Content>
    </Accordion.Item>
  </Accordion>
  ```
- ✨ Feat: add new `<ButtonGroup />` component
  ```jsx
  <ButtonGroup {...args} color="blue" size="sm">
    <Button>First</Button>
    <Button leftIcon="Calendar">Second</Button>
    <Button>Third</Button>
  </ButtonGroup>
  ```
- ✨ Feat: add new `<Copyable />` component. A component that adds a copy to clipboard icon and handler in a text.
  ```jsx
  <Copyable>Some value</Copyable>
  ```
- ✨ Feat: add new `<Switch />` component using [Radix Switch](https://www.radix-ui.com/docs/primitives/components/switch) as base
  ```jsx
  <Flex align="center">
    <Form.Label htmlFor="s1">Label</Form.Label>
    <Switch defaultChecked id="s1" {...args} />
  </Flex>
  ```
- ✨ Feat: add new `toast()` function that shows a toast using [react-hot-toast](https://react-hot-toast.com/) behind the scenes. It also includes `<ToastProvider />` in our `<ThemeProvider />` by default.
  ```jsx
  import { Button, toast } from "@fuel-ui/react";
  function App() {
    return <Button onPress={() => toast("Hello world!")}>Show toast</Button>;
  }
  ```

### Patch Changes

- 🐞 Fix: adjust focus active style on buttons inside `<ButtonGroup />`, by [@pedronauck](https://github.com/pedronauck) (See [#97](https://github.com/FuelLabs/fuel-ui/pull/97))

## 0.0.2

### Patch Changes

- Add changesets to monorepo, by [@pedronauck](https://github.com/pedronauck) (See [#46](https://github.com/FuelLabs/fuel-ui/pull/46))
- Add a new `<Popover>` component using Radix as base component
  ```jsx
  <Popover content={<div>Hello world</div>}>
    <Button>Click here</Button>
  </Popover>
  ```
- Add a new component `<AspectRatio>` for embedding images with a pre-defined ratio
  ```jsx
  <AspectRatio ratio={16 / 9} {...args}>
    <img
      className={styles.img()}
      src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
      alt="Landscape photo by Tobias Tullius"
    />
  </AspectRatio>
  ```
- ⚠️ Fix default <Button> props when merge with useButton() props using mergeProps from react-aria, by [@pedronauck](https://github.com/pedronauck) (See [#82](https://github.com/FuelLabs/fuel-ui/pull/82))
- Updated dependencies (See [#46](https://github.com/FuelLabs/fuel-ui/pull/46))
  - @fuel-ui/test-utils@0.0.2
  - @fuel-ui/css@0.0.2
