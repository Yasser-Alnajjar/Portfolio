# Component Catalog

A comprehensive catalog of all UI components in the portfolio application, organized by category with detailed documentation, props, and usage examples.

## Table of Contents

1. [Layout Components](#layout-components)
2. [Form Components](#form-components)
3. [Display Components](#display-components)
4. [Navigation Components](#navigation-components)
5. [Overlay Components](#overlay-components)
6. [Feedback Components](#feedback-components)
7. [Data Components](#data-components)
8. [Media Components](#media-components)

## Layout Components

### Card

**File:** `components/atoms/card.tsx`

A flexible card container with multiple sub-components for structured content display.

```typescript
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>()
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>()
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>()
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>()
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>()
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>()
```

**Sub-components:**
- `Card`: Main container with rounded borders and background
- `CardHeader`: Header section with vertical spacing
- `CardTitle`: Large title text with proper typography
- `CardDescription`: Subtitle with muted text color
- `CardContent`: Main content area with padding
- `CardFooter`: Footer with flex layout for buttons/actions

**Usage:**
```tsx
<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Project Title</CardTitle>
    <CardDescription>Brief project description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Detailed project information goes here.</p>
  </CardContent>
  <CardFooter className="flex gap-2">
    <Button variant="outline">Cancel</Button>
    <Button>Continue</Button>
  </CardFooter>
</Card>
```

### Separator

**File:** `components/atoms/separator.tsx`

A visual separator component for dividing content sections.

```typescript
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>()
```

**Props:**
- `orientation`: "horizontal" | "vertical" (default: "horizontal")
- `decorative`: boolean (default: true)

**Usage:**
```tsx
<div className="space-y-4">
  <p>Content above separator</p>
  <Separator />
  <p>Content below separator</p>
</div>

<div className="flex h-5 items-center space-x-4">
  <div>Item 1</div>
  <Separator orientation="vertical" />
  <div>Item 2</div>
</div>
```

### Aspect Ratio

**File:** `components/atoms/aspect-ratio.tsx`

A component for maintaining aspect ratios of content.

```typescript
const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
>()
```

**Props:**
- `ratio`: number (width/height ratio)

**Usage:**
```tsx
<AspectRatio ratio={16 / 9} className="bg-muted">
  <img
    src="/placeholder.jpg"
    alt="Photo"
    className="rounded-md object-cover w-full h-full"
  />
</AspectRatio>
```

## Form Components

### Button

**File:** `components/atoms/button.tsx`

A versatile button component with multiple variants and sizes.

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
```

**Variants:**
- `default`: Primary blue button
- `tint`: Gray tinted button
- `success`: Green success button
- `error`: Red error button
- `warning`: Yellow warning button
- `outline`: Outlined button with transparent background
- `secondary`: Secondary styled button
- `ghost`: Transparent button with hover effects
- `link`: Text link styled as button

**Sizes:**
- `default`: Standard size (h-10, px-4, py-2)
- `sm`: Small size (h-9, px-3)
- `md`: Medium size (h-8, px-3)
- `lg`: Large size (h-11, px-8)
- `icon`: Square icon button (size-7)

**Usage:**
```tsx
{/* Basic buttons */}
<Button>Default Button</Button>
<Button variant="outline" size="sm">Small Outline</Button>
<Button variant="error" size="lg">Delete Account</Button>

{/* Icon button */}
<Button variant="ghost" size="icon">
  <Settings className="h-4 w-4" />
</Button>

{/* As child (renders as different element) */}
<Button asChild>
  <Link href="/about">Learn More</Link>
</Button>
```

### Input

**File:** `components/atoms/input.tsx`

A styled input component for forms.

```typescript
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>()
```

**Props:**
- All standard HTML input props
- `type`: Input type (text, email, password, etc.)
- `className`: Additional CSS classes

**Usage:**
```tsx
<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>

<Input 
  type="password" 
  placeholder="Password" 
  className="w-full"
/>
```

### Label

**File:** `components/atoms/label.tsx`

A label component for form inputs.

```typescript
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>()
```

**Usage:**
```tsx
<Label htmlFor="terms">Accept terms and conditions</Label>
<Label className="text-sm font-medium">Required Field</Label>
```

### Textarea

**File:** `components/atoms/textarea.tsx`

A multi-line text input component.

```typescript
const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>()
```

**Usage:**
```tsx
<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea 
    placeholder="Type your message here." 
    id="message" 
    rows={4}
  />
</div>
```

### Checkbox

**File:** `components/atoms/checkbox.tsx`

A checkbox input component.

```typescript
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>()
```

**Usage:**
```tsx
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>
```

### Switch

**File:** `components/atoms/switch.tsx`

A toggle switch component.

```typescript
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>()
```

**Usage:**
```tsx
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>
```

### Slider

**File:** `components/atoms/slider.tsx`

A range slider component.

```typescript
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>()
```

**Usage:**
```tsx
<div className="w-full max-w-sm">
  <Label>Volume</Label>
  <Slider
    defaultValue={[50]}
    max={100}
    min={0}
    step={1}
    className="w-full"
  />
</div>
```

## Display Components

### Badge

**File:** `components/atoms/badge.tsx`

A small status indicator or label component.

```typescript
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}
```

**Variants:**
- `default`: Primary colored badge
- `error`: Red error badge
- `success`: Green success badge
- `warning`: Yellow warning badge
- `info`: Blue info badge
- `tint`: Gray tinted badge
- `outline`: Outlined badge with transparent background

**Usage:**
```tsx
<Badge>Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="outline">Outline</Badge>

{/* With custom styling */}
<Badge className="text-xs">
  New Feature
</Badge>
```

### Avatar

**File:** `components/atoms/avatar.tsx`

A user avatar component with fallback support.

```typescript
const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>()
const AvatarImage = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>()
const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>>()
```

**Usage:**
```tsx
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

{/* Different sizes */}
<Avatar className="h-8 w-8">
  <AvatarImage src="/avatar.jpg" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### Progress

**File:** `components/atoms/progress.tsx`

A progress bar component for showing completion status.

```typescript
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>()
```

**Props:**
- `value`: number (0-100)
- `max`: number (default: 100)

**Usage:**
```tsx
<div className="w-full">
  <div className="flex justify-between text-sm mb-2">
    <span>Progress</span>
    <span>60%</span>
  </div>
  <Progress value={60} className="w-full" />
</div>
```

### Skeleton

**File:** `components/atoms/skeleton.tsx`

A loading skeleton component for placeholder content.

```typescript
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>)
```

**Usage:**
```tsx
{/* Loading card skeleton */}
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>
```

## Navigation Components

### Tabs

**File:** `components/atoms/tabs.tsx`

A tab navigation component.

```typescript
const Tabs = TabsPrimitive.Root
const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>()
const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>()
const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>()
```

**Usage:**
```tsx
<Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Make changes to your account here.</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Change your password here.</p>
  </TabsContent>
</Tabs>
```

### Breadcrumb

**File:** `components/atoms/breadcrumb.tsx`

A breadcrumb navigation component.

```typescript
const Breadcrumb = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"nav">>()
const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>()
const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>()
const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<"a"> & { asChild?: boolean }>()
const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>()
const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">)
const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">)
```

**Usage:**
```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Components</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Pagination

**File:** `components/atoms/pagination.tsx`

A pagination component for navigating through pages.

```typescript
const Pagination = ({ className, ...props }: React.ComponentProps<"nav">)
const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>()
const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>()
const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps)
const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>)
const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>)
const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">)
```

**Usage:**
```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## Overlay Components

### Dialog

**File:** `components/atoms/dialog.tsx`

A modal dialog component with multiple sub-components.

```typescript
const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close
const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>()
const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>()
const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>)
const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>)
const DialogTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>()
const DialogDescription = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>()
```

**Usage:**
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" value="Pedro Duarte" className="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Tooltip

**File:** `components/atoms/tooltip.tsx`

A tooltip component for providing additional information on hover.

```typescript
const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipContent = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>>()
```

**Usage:**
```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Popover

**File:** `components/atoms/popover.tsx`

A popover component for displaying content in an overlay.

```typescript
const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverContent = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>, React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>>()
```

**Usage:**
```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
    </div>
  </PopoverContent>
</Popover>
```

### Drawer

**File:** `components/atoms/drawer.tsx`

A drawer component for side panels and mobile navigation.

```typescript
const Drawer = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>)
const DrawerTrigger = DrawerPrimitive.Trigger
const DrawerPortal = DrawerPrimitive.Portal
const DrawerClose = DrawerPrimitive.Close
const DrawerOverlay = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>>()
const DrawerContent = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>>()
const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>)
const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>)
const DrawerTitle = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>>()
const DrawerDescription = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>>()
```

**Usage:**
```tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Move Goal</DrawerTitle>
        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 pb-0">
        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="icon">-</Button>
          <span className="flex-1 text-center text-7xl font-bold">350</span>
          <Button variant="outline" size="icon">+</Button>
        </div>
      </div>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>
```

### Sheet

**File:** `components/atoms/sheet.tsx`

A sheet component for slide-out panels from screen edges.

```typescript
const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal
const SheetOverlay = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>>()
const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & SheetContentProps>()
const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>)
const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>)
const SheetTitle = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Title>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>>()
const SheetDescription = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Description>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>>()
```

**Sides:**
- `top`: Slides from top
- `right`: Slides from right (default)
- `bottom`: Slides from bottom  
- `left`: Slides from left

**Usage:**
```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" value="Pedro Duarte" className="col-span-3" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

## Feedback Components

### Alert

**File:** `components/atoms/alert.tsx`

An alert component for displaying important messages.

```typescript
const Alert = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>>()
const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>()
const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>()
```

**Variants:**
- `default`: Standard alert
- `destructive`: Error/warning alert with red styling

**Usage:**
```tsx
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
```

### Toast (Sonner)

**File:** `components/atoms/sonner.tsx`

A toast notification component using Sonner.

```typescript
function Toaster({ ...props }: ToasterProps)
```

**Usage:**
```tsx
// Add to root layout
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

// Use with hook
import { toast } from "sonner"

// Show toast
toast("Event has been created")
toast.success("Data saved successfully!")
toast.error("Something went wrong!")
```

## Data Components

### Table

**File:** `components/atoms/table.tsx`

A table component for displaying tabular data.

```typescript
const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>()
const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>()
const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>()
const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>()
const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>()
const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>()
const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>()
const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>()
```

**Usage:**
```tsx
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Accordion

**File:** `components/atoms/accordion.tsx`

A collapsible content component.

```typescript
const Accordion = AccordionPrimitive.Root
const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>()
const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>()
const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>()
```

**Usage:**
```tsx
<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match the other components.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Collapsible

**File:** `components/atoms/collapsible.tsx`

A simple collapsible content component.

```typescript
const Collapsible = CollapsiblePrimitive.Root
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent
```

**Usage:**
```tsx
<Collapsible>
  <div className="flex items-center justify-between space-x-4 px-4">
    <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" className="w-9 p-0">
        <ChevronsUpDown className="h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-3 font-mono text-sm">
      @radix-ui/primitives
    </div>
  </CollapsibleContent>
</Collapsible>
```

## Media Components

### Carousel

**File:** `components/atoms/carousel.tsx`

A carousel component for displaying multiple items.

```typescript
type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

interface CarouselProps {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>()
const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>()
const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>()
const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>()
const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>()
```

**Usage:**
```tsx
<Carousel className="w-full max-w-xs">
  <CarouselContent>
    <CarouselItem>
      <div className="p-1">
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">1</span>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div className="p-1">
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">2</span>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

## Custom Components

### Theme Provider

**File:** `components/atoms/theme-provider.tsx`

A theme provider component for managing light/dark themes.

```typescript
interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: string
  storageKey?: string
}

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme", ...props }: ThemeProviderProps)
```

**Usage:**
```tsx
// Wrap your app
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="App">
        {/* Your app content */}
      </div>
    </ThemeProvider>
  )
}
```

### Toggle Theme

**File:** `components/atoms/toggle-theme.tsx`

A theme toggle button component.

```typescript
export function ToggleTheme()
```

**Usage:**
```tsx
import { ToggleTheme } from "@/components/atoms/toggle-theme"

<ToggleTheme />
```

### File Drop Zone

**File:** `components/atoms/file-drop-zone.tsx`

A drag-and-drop file upload component.

```typescript
interface FileDropZoneProps {
  onFileSelect: (files: File[]) => void
  accept?: string
  multiple?: boolean
  maxSize?: number
  disabled?: boolean
  className?: string
}

export function FileDropZone({ onFileSelect, accept, multiple = false, maxSize, disabled = false, className }: FileDropZoneProps)
```

**Usage:**
```tsx
<FileDropZone
  onFileSelect={(files) => {
    console.log('Selected files:', files)
  }}
  accept="image/*"
  multiple={true}
  maxSize={5 * 1024 * 1024} // 5MB
  className="w-full h-48"
/>
```

### Loading Spinner

**File:** `components/atoms/grow-spinner.tsx`

A growing spinner component for loading states.

```typescript
interface GrowSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function GrowSpinner({ size = 'md', className }: GrowSpinnerProps)
```

**Usage:**
```tsx
<GrowSpinner size="lg" />
<GrowSpinner className="text-blue-500" />
```

---

## Component Guidelines

### Styling
- All components use Tailwind CSS for styling
- Components support className prop for custom styling
- Use `cn()` utility for merging classes
- Dark mode support through CSS variables

### Accessibility
- Components follow WAI-ARIA guidelines
- Proper keyboard navigation support
- Screen reader friendly with semantic HTML
- Focus management for interactive elements

### TypeScript
- Full TypeScript support with proper typing
- Generic components where applicable
- Props extend native HTML element props
- Ref forwarding for DOM access

### Responsive Design
- Mobile-first responsive design
- Consistent breakpoint usage
- Touch-friendly interactive elements
- Flexible layouts that adapt to screen sizes

---

*This catalog is automatically generated and should be kept up to date with component changes.*