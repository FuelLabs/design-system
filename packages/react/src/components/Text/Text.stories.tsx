import { allColors } from '@fuel-js/css'
import { Text, TextProps } from './Text'

export default {
  component: Text,
  title: 'Typography/Text',
  argTypes: {
    color: {
      options: allColors,
      defaultValue: 'accent',
      control: 'select',
    },
  },
}

export const Usage = (args: TextProps) => (
  <>
    <Text {...args}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde
      esse, vel ab aperiam est quam iure iusto? Totam eligendi laudantium
      repellat quasi in deserunt laboriosam amet atque? Consectetur, blanditiis?
    </Text>
  </>
)

export const WithIcon = (args: TextProps) => (
  <>
    <Text {...args} leftIcon="BiCalendar" iconAriaLabel="calendar">
      Just some text
    </Text>
    <Text {...args} rightIcon="BiCalendar" iconAriaLabel="calendar">
      Just some text
    </Text>
  </>
)
