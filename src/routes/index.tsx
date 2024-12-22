import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Dropdown } from "@qwik-ui/headless";
import { cn } from "@qwik-ui/utils";
import {
  LuBell,
  LuCheck,
  LuChevronDown,
  LuRocket,
  LuX,
} from "@qwikest/icons/lucide";
import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  buttonVariants,
  Card,
  Checkbox,
  Combobox,
  Input,
  Label,
  Modal,
  Popover,
  Progress,
  RadioGroup,
  Select,
  Separator,
  Skeleton,
  Tabs,
  Textarea,
  Toggle,
  ToggleGroup,
} from "~/components/ui";

export default component$(() => {
  const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ];

  const fruits = [
    "Apple",
    "Apricot",
    "Bilberry",
    "Blackberry",
    "Blackcurrant",
    "Currant",
    "Cherry",
    "Coconut",
  ];

  const actions = [
    { label: "Merge Branch ⌘+M", disabled: false },
    { label: "Rebase Branch ⌘+R", disabled: true },
    { label: "Stash Changes ⌘+S", disabled: false },
    { label: "Checkout Branch ⌘+B", disabled: false },
    { label: "Pull Changes ⌘+P", disabled: false },
    { label: "Create Tag ⌘+T", disabled: false },
  ];

  const show = useSignal(false);

  const progress = useSignal(20);

  useVisibleTask$(() => {
    setTimeout(() => {
      progress.value = 50;
    }, 500);
  });

  const users = ["Tim", "Ryan", "Jim", "Jessie", "Abby"];

  return (
    <>
      <div class=" flex flex-col items-center justify-center">
        <Accordion.Root class="w-full">
          <Accordion.Item>
            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It adheres to the WAI-ARIA design pattern.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Trigger>Is it styled?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Trigger>Is it animated?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
        <br />
        <Alert.Root>
          <LuRocket class="h-4 w-4" />
          <Alert.Title>Heads up!</Alert.Title>
          <Alert.Description>
            You can add components to your app using the cli.
          </Alert.Description>
        </Alert.Root>
        <br />
        <Avatar.Root>
          <Avatar.Image src="https://github.com/mhevery.png" alt="@mhevery" />
          <Avatar.Fallback>MA</Avatar.Fallback>
        </Avatar.Root>
        <br />
        <Badge>Badge</Badge>
        <br />
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/docs/styled/introduction/">
                Components
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
        <br />
        <Button look="primary">Primary</Button>
        <br />
        <Card.Root class={cn("w-[380px]")}>
          <Card.Header>
            <Card.Title>Notifications</Card.Title>
            <Card.Description>You have 3 unread messages.</Card.Description>
          </Card.Header>
          <Card.Content class="grid gap-4">
            <div class=" flex items-center space-x-4 rounded-md border p-4">
              <LuBell />
              <div class="flex-1 space-y-1">
                <p class="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p class="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
              {/* <Switch /> */}
            </div>
            <div>
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span class="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
                  <div class="space-y-1">
                    <p class="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    <p class="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card.Content>
          <Card.Footer>
            <Button class="w-full">
              <LuCheck class="mr-2 h-4 w-4" /> Mark all as read
            </Button>
          </Card.Footer>
        </Card.Root>
        <br />
        <div>
          <div class="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label for="terms">Accept terms and conditions</Label>
          </div>
        </div>
        <br />
        <Combobox.Root>
          <Combobox.Label>Personal Trainers</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input />
            <Combobox.Trigger>
              <LuChevronDown />
            </Combobox.Trigger>
          </Combobox.Control>
          <Combobox.Popover gutter={8}>
            {fruits.map((fruit) => (
              <Combobox.Item key={fruit}>
                <Combobox.ItemLabel>{fruit}</Combobox.ItemLabel>
                <Combobox.ItemIndicator>
                  <LuCheck />
                </Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </Combobox.Popover>
        </Combobox.Root>
        <br />
        <Dropdown.Root>
          <Dropdown.Trigger>Git Settings</Dropdown.Trigger>
          <Dropdown.Popover gutter={8}>
            {actions.map((action) => (
              <Dropdown.Item key={action.label} disabled={action.disabled}>
                {action.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Popover>
        </Dropdown.Root>
        <br />
        <Input type="email" placeholder="Email" />
        <br />
        <div>
          <div class="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label for="terms">Accept terms and conditions</Label>
          </div>
        </div>
        <br />
        <Modal.Root bind:show={show}>
          <Modal.Trigger class={[buttonVariants({ look: "outline" })]}>
            Open modal
          </Modal.Trigger>
          <Modal.Panel>
            <Modal.Title>Edit Profile</Modal.Title>
            <Modal.Description>
              Make changes to your profile here. Click save when you're done.
            </Modal.Description>
            <div class="grid gap-4 py-4">
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="name" class="text-right">
                  Name
                </Label>
                <Input
                  name="name"
                  id="name"
                  defaultValue="Pedro Duarte"
                  class="col-span-3"
                />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="username" class="text-right">
                  Username
                </Label>
                <Input
                  name="username"
                  id="username"
                  defaultValue="@peduarte"
                  class="col-span-3"
                />
              </div>
            </div>
            <footer>
              <Button look="primary" onClick$={() => (show.value = false)}>
                Save
              </Button>
            </footer>
            <Modal.Close
              class={cn(
                buttonVariants({ size: "icon", look: "link" }),
                "absolute right-3 top-2",
              )}
              type="submit"
            >
              <LuX class="h-5 w-5" />
            </Modal.Close>
          </Modal.Panel>
        </Modal.Root>
        <br />
        <Popover.Root flip={false} gutter={8}>
          <Popover.Trigger class={buttonVariants({ look: "outline" })}>
            Open popover.
          </Popover.Trigger>
          <Popover.Panel>
            <div class="grid gap-4">
              <div class="space-y-2">
                <h4 class="font-medium leading-none">Dimensions</h4>
                <p class="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div class="grid gap-2">
                <div class="grid grid-cols-5 items-center gap-4">
                  <Label class="col-span-2" for="width">
                    Width
                  </Label>
                  <Input name="width" value="100%" class="col-span-3 h-8" />
                </div>
                <div class="grid grid-cols-5 items-center gap-4">
                  <Label class="col-span-2" for="maxWidth">
                    Max. width
                  </Label>
                  <Input name="maxWidth" value="300px" class="col-span-3 h-8" />
                </div>
                <div class="grid grid-cols-5 items-center gap-4">
                  <Label class="col-span-2" for="height">
                    Height
                  </Label>
                  <Input name="height" value="25px" class="col-span-3 h-8" />
                </div>
                <div class="grid grid-cols-5 items-center gap-4">
                  <Label class="col-span-2" for="maxHeight">
                    Max. height
                  </Label>
                  <Input name="maxHeight" value="none" class="col-span-3 h-8" />
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Popover.Root>
        <br />
        <Progress bind:value={progress} />
        <br />
        <RadioGroup.Root>
          <div class="flex items-center space-x-2">
            <RadioGroup.Item name="size" value="default" id="r1" />
            <Label for="r1">Default</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroup.Item name="size" value="comfortable" id="r2" />
            <Label for="r2">Comfortable</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroup.Item name="size" value="compact" id="r3" />
            <Label for="r3">Compact</Label>
          </div>
        </RadioGroup.Root>
        <br />
        <Select.Root>
          <Select.Label>Logged in users</Select.Label>
          <Select.Trigger>
            <Select.DisplayValue placeholder="Select an option" />
          </Select.Trigger>
          <Select.Popover gutter={8}>
            {users.map((user) => (
              <Select.Item key={user}>
                <Select.ItemLabel>{user}</Select.ItemLabel>
                <Select.ItemIndicator>
                  <LuCheck class="h-4 w-4" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Popover>
        </Select.Root>
        <br />
        <div>
          <div class="space-y-1">
            <h4 class="text-sm font-medium leading-none">Qwik UI</h4>
            <p class="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator class="my-4" />
          <div class="flex h-5 items-center space-x-4 text-sm">
            <div>Customizable</div>
            <Separator orientation="vertical" />
            <div>Accessible</div>
            <Separator orientation="vertical" />
            <div>Optimized for you</div>
          </div>
        </div>
        <br />
        <div class="flex items-center space-x-4">
          <Skeleton class="h-12 w-12 rounded-full" />
          <div class="space-y-2">
            <Skeleton class="h-4 w-[250px]" />
            <Skeleton class="h-4 w-[200px]" />
          </div>
        </div>
        <br />
        <Tabs.Root class="max-w-[400px]">
          <Tabs.List class="grid w-full grid-cols-2">
            <Tabs.Tab>Account</Tabs.Tab>
            <Tabs.Tab>Password</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel>
            <Card.Root>
              <Card.Header>
                <Card.Title>Account</Card.Title>
                <Card.Description>
                  Make changes to your account here. Click save when you're
                  done.
                </Card.Description>
              </Card.Header>
              <Card.Content class="space-y-2">
                <div class="space-y-1">
                  <Label for="name">Name</Label>
                  <Input id="name" value="Pedro Duarte" />
                </div>
                <div class="space-y-1">
                  <Label for="username">Username</Label>
                  <Input id="username" value="~peduarte" />
                </div>
              </Card.Content>
              <Card.Footer>
                <Button>Save changes</Button>
              </Card.Footer>
            </Card.Root>
          </Tabs.Panel>
          <Tabs.Panel>
            <Card.Root>
              <Card.Header>
                <Card.Title>Password</Card.Title>
                <Card.Description>
                  Change your password here. After saving, you'll be logged out.
                </Card.Description>
              </Card.Header>
              <Card.Content class="space-y-2">
                <div class="space-y-1">
                  <Label for="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div class="space-y-1">
                  <Label for="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </Card.Content>
              <Card.Footer>
                <Button>Save password</Button>
              </Card.Footer>
            </Card.Root>
          </Tabs.Panel>
        </Tabs.Root>
        <br />
        <Textarea placeholder="Type your message here." />
        <br />
        <Toggle>Hello</Toggle>
        <br />
        <ToggleGroup.Root>
          <ToggleGroup.Item value="left" aria-label="Left aligned">
            Left
          </ToggleGroup.Item>
          <ToggleGroup.Item value="center" aria-label="Center aligned">
            Center
          </ToggleGroup.Item>
          <ToggleGroup.Item value="right" aria-label="Right aligned">
            Right
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
