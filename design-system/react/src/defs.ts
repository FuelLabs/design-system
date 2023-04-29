/// <reference types="@fuel-stitches/react" />

import type {
  AccordionContentDef,
  AccordionDef,
  AccordionItemDef,
  AccordionTriggerDef,
} from './components/Accordion/defs';
import type {
  AlertActionsDef,
  AlertButtonDef,
  AlertDef,
  AlertDescriptionDef,
  AlertTitleDef,
} from './components/Alert/defs';
import type { AspectRatioDef } from './components/AspectRatio/defs';
import type { AvatarDef, AvatarGeneratedDef } from './components/Avatar/defs';
import type { BadgeDef } from './components/Badge/defs';
import type {
  StackDef,
  FlexDef,
  BoxCenteredDef,
  BoxDef,
  ContainerDef,
} from './components/Box/defs';
import type { ButtonDef } from './components/Button/defs';
import type { HeadingDef } from './components/Heading/defs';
import type { HelperIconDef } from './components/HelperIcon/defs';
import type { IconDef } from './components/Icon/defs';
import type { ImageDef } from './components/Image/defs';
import type { LinkDef } from './components/Link/defs';
import type { SpinnerDef } from './components/Spinner/defs';
import type { TextDef } from './components/Text/defs';

export enum Components {
  Accordion = 'Accordion',
  AccordionContent = 'AccordionContent',
  AccordionItem = 'AccordionItem',
  AccordionTrigger = 'AccordionTrigger',
  Alert = 'Alert',
  AlertTitle = 'AlertTitle',
  AlertActions = 'AlertActions',
  AlertButton = 'AlertButton',
  AlertDescription = 'AlertDescription',
  AlertDialog = 'AlertDialog',
  AlertDialogAction = 'AlertDialogAction',
  AlertDialogCancel = 'AlertDialogCancel',
  AlertDialogContent = 'AlertDialogContent',
  AlertDialogDescription = 'AlertDialogDescription',
  AlertDialogFooter = 'AlertDialogFooter',
  AlertDialogHeading = 'AlertDialogHeading',
  AlertDialogTrigger = 'AlertDialogTrigger',
  AspectRatio = 'AspectRatio',
  Avatar = 'Avatar',
  AvatarGenerated = 'AvatarGenerated',
  Badge = 'Badge',
  Box = 'Box',
  BoxCentered = 'BoxCentered',
  Button = 'Button',
  ButtonGroup = 'ButtonGroup',
  ButtonLink = 'ButtonLink',
  Card = 'Card',
  CardBody = 'CardBody',
  CardFooter = 'CardFooter',
  CardHeader = 'CardHeader',
  CardList = 'CardList',
  CardListItem = 'CardListItem',
  Checkbox = 'Checkbox',
  Container = 'Container',
  ContentLoader = 'ContentLoader',
  Copyable = 'Copyable',
  Dialog = 'Dialog',
  DialogClose = 'DialogClose',
  DialogContent = 'DialogContent',
  DialogDescription = 'DialogDescription',
  DialogFooter = 'DialogFooter',
  DialogHeading = 'DialogHeading',
  DialogTrigger = 'DialogTrigger',
  Drawer = 'Drawer',
  DrawerBody = 'DrawerBody',
  DrawerClose = 'DrawerClose',
  DrawerContent = 'DrawerContent',
  DrawerTrigger = 'DrawerTrigger',
  Dropdown = 'Dropdown',
  DropdownMenu = 'DropdownMenu',
  DropdownMenuItem = 'DropdownMenuItem',
  DropdownTrigger = 'DropdownTrigger',
  Flex = 'Flex',
  FocusArrowNavigator = 'FocusArrowNavigator',
  FocusScope = 'FocusScope',
  Form = 'Form',
  FormControl = 'FormControl',
  FormErrorMessage = 'FormErrorMessage',
  FormHelperText = 'FormHelperText',
  FormLabel = 'FormLabel',
  FuelLogo = 'FuelLogo',
  Grid = 'Grid',
  GridItem = 'GridItem',
  Heading = 'Heading',
  HelperIcon = 'HelperIcon',
  Icon = 'Icon',
  IconButton = 'IconButton',
  Image = 'Image',
  Input = 'Input',
  InputAddon = 'InputAddon',
  InputAddonLeft = 'InputAddonLeft',
  InputAddonRight = 'InputAddonRight',
  InputElement = 'InputElement',
  InputElementLeft = 'InputElementLeft',
  InputElementRight = 'InputElementRight',
  InputField = 'InputField',
  InputAmount = 'InputAmount',
  InputPassword = 'InputPassword',
  Link = 'Link',
  List = 'List',
  ListItem = 'ListItem',
  Menu = 'Menu',
  MenuItem = 'MenuItem',
  Pagination = 'Pagination',
  PaginationItem = 'PaginationItem',
  PaginationItems = 'PaginationItems',
  PaginationPrev = 'PaginationPrev',
  PaginationNext = 'PaginationNext',
  PaginationNav = 'PaginationNav',
  PasswordStrength = 'PasswordStrength',
  Popover = 'Popover',
  RadioGroup = 'RadioGroup',
  RadioGroupItem = 'RadioGroupItem',
  Spinner = 'Spinner',
  Stack = 'Stack',
  Switch = 'Switch',
  Tabs = 'Tabs',
  TabsContent = 'TabsContent',
  TabsList = 'TabsList',
  TabsTrigger = 'TabsTrigger',
  Tag = 'Tag',
  TagCloseButton = 'TagCloseButton',
  Text = 'Text',
  Toast = 'Toast',
  Tooltip = 'Tooltip',
}

export type StoreDefs = {
  Accordion: AccordionDef;
  AccordionContent: AccordionContentDef;
  AccordionItem: AccordionItemDef;
  AccordionTrigger: AccordionTriggerDef;
  Alert: AlertDef;
  AlertActions: AlertActionsDef;
  AlertButton: AlertButtonDef;
  AlertDescription: AlertDescriptionDef;
  AlertTitle: AlertTitleDef;
  AspectRatio: AspectRatioDef;
  Avatar: AvatarDef;
  AvatarGenerated: AvatarGeneratedDef;
  Badge: BadgeDef;
  Box: BoxDef;
  BoxCentered: BoxCenteredDef;
  Button: ButtonDef;
  Container: ContainerDef;
  Image: ImageDef;
  Flex: FlexDef;
  Heading: HeadingDef;
  Text: TextDef;
  Link: LinkDef;
  Spinner: SpinnerDef;
  Stack: StackDef;
  Icon: IconDef;
  HelperIcon: HelperIconDef;
};