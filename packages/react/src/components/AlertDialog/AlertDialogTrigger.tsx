import { styled } from '@fuel/css'
import * as RAlertDialog from '@radix-ui/react-alert-dialog'

export type AlertDialogTriggerProps = RAlertDialog.AlertDialogTriggerProps
export const AlertDialogTrigger = styled(RAlertDialog.AlertDialogTrigger)

AlertDialogTrigger.defaultProps = {
  asChild: true,
}
