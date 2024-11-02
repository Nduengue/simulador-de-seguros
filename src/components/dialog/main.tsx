// "use client"
import { Dialog, Button, Flex } from "@radix-ui/themes";

export function Main({
  triggerButton: TrigerButton,
  title,
  closeButtonTitle,
  // actionButtonTitle,
  // actionButtonFunction,
  // actionButtonColor,
  closeButtonColor,
  children
}: {
  triggerButton: React.ComponentType;
  title?: string;
  closeButtonTitle?: string;
  closeButtonColor?: RadixColorType;
  // actionButtonTitle?: string;
  // actionButtonFunction?: () => void;
  // actionButtonColor?: RadixColorType;
  children?: React.ReactNode;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <TrigerButton />
      </Dialog.Trigger>
      <Dialog.Content maxWidth="450px">
        {/* <Dialog.Content > */}
        <Dialog.Title> {title} </Dialog.Title>
        <Dialog.Description size="2">
     {children}
          {/* {actionButtonFunction ? "true" : "false"} */}
        </Dialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button
              type="button"
              // variant="soft"
              color={closeButtonColor ? closeButtonColor : "orange"}
            >
              {closeButtonTitle ? closeButtonTitle : "Cancelar"}
            </Button>
          </Dialog.Close>

          {/* <Dialog.Close hidden={actionButtonFunction ? false : true}> */}
          {/* <Button */}
          {/*  onClick={()=>alert("teste")} */}
          {/*  type="button" */}
          {/*  variant="solid" */}
          {/*  color={actionButtonColor ? actionButtonColor : "blue"} */}
          {/*  > */}
          {/* {actionButtonTitle ? actionButtonTitle : "Ok"} */}
          {/* </Button> */}
          {/* </Dialog.Close> */}
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
