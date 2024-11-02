"use client"
import { AlertDialog, Button, Flex } from "@radix-ui/themes";

export function Main({
  triggerButton: TrigerButton,
  title,
}: {
  triggerButton: React.ComponentType;
  title?: string;
}) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <TrigerButton />
      </AlertDialog.Trigger>
      {/* <AlertDialog.Content maxWidth="450px"> */}
      <AlertDialog.Content >
        <AlertDialog.Title> {title} </AlertDialog.Title>
        <AlertDialog.Description size="2">
          --------------------------------------- Are you sure? This application
          will no longer be accessible and any existing sessions will be
          expired.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={() => alert("hello")}>
              Abrir Modal
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
