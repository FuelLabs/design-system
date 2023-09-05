import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Nav } from './Nav';

const meta: Meta<typeof Nav> = {
  title: 'UI/Nav',
  component: Nav,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

const ACCOUNT =
  'fuel10va6297tkerdcn5u8mxjm9emudsmkj85pq5x7t7stkmzmc4nvs3qvn99qz';

const NETWORK = {
  id: '1',
  name: 'Mainnet',
  url: 'https://mainnet.fuel.sh',
};

export const Usage: Story = {
  render: () => (
    <Nav network={NETWORK} account={ACCOUNT}>
      <Nav.View type="desktop">
        <Nav.Logo />
        <Nav.Menu>
          <Nav.MenuItem href="#" isActive>
            Developers
          </Nav.MenuItem>
          <Nav.MenuItem href="#">Community</Nav.MenuItem>
          <Nav.MenuItem href="#" isExternal>
            Labs
          </Nav.MenuItem>
        </Nav.Menu>
        <Nav.Spacer />
        <Nav.Menu>
          <Nav.MenuItem href="#">Bridge</Nav.MenuItem>
          <Nav.MenuItem href="#">Explorer</Nav.MenuItem>
          <Nav.MenuItem href="#">Ecosystem</Nav.MenuItem>
        </Nav.Menu>
        <Nav.ThemeToggle />
        <Nav.Connection />
      </Nav.View>
    </Nav>
  ),
};

export const NoConnection: Story = {
  render: () => (
    <Nav onConnect={action('onConnect')}>
      <Nav.Logo />
      <Nav.Menu>
        <Nav.MenuItem href="#" isActive>
          Developers
        </Nav.MenuItem>
        <Nav.MenuItem href="#">Community</Nav.MenuItem>
        <Nav.MenuItem href="#">Labs</Nav.MenuItem>
      </Nav.Menu>
      <Nav.Spacer />
      <Nav.Menu>
        <Nav.MenuItem href="#">Bridge</Nav.MenuItem>
        <Nav.MenuItem href="#">Explorer</Nav.MenuItem>
        <Nav.MenuItem href="#">Ecosystem</Nav.MenuItem>
      </Nav.Menu>
      <Nav.ThemeToggle />
      <Nav.Connection />
    </Nav>
  ),
};

export const Mobile: Story = {
  render: () => <div>hi</div>,
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
};