# Design Guidelines: Jordan Maxwell AI Chatbot

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Claude.ai and ChatGPT interfaces, with elements from Linear's dark mode excellence. This chat application prioritizes conversation clarity, intellectual depth, and distraction-free interaction.

## Core Design Principles
1. **Conversational Clarity**: Maximum readability for extended philosophical discussions
2. **Intellectual Depth**: Visual design reflecting Jordan Maxwell's scholarly nature
3. **Minimal Distraction**: Clean interface that focuses attention on the dialogue
4. **Dark-First Design**: Primary dark theme with optional light mode

---

## Color Palette

### Dark Mode (Primary)
- **Background**: 220 15% 8% (deep charcoal, almost black)
- **Surface**: 220 15% 12% (elevated panels, chat containers)
- **Surface Elevated**: 220 15% 16% (input areas, headers)
- **Primary Brand**: 45 95% 55% (warm amber/gold - symbolic of enlightenment)
- **Text Primary**: 220 10% 95% (near white, high contrast)
- **Text Secondary**: 220 10% 65% (muted for metadata, timestamps)
- **Border Subtle**: 220 15% 20% (minimal separation lines)
- **AI Response Background**: 220 15% 14% (slightly elevated from base)
- **User Message Background**: 45 20% 18% (subtle amber tint)

### Light Mode (Alternative)
- **Background**: 220 15% 98%
- **Surface**: 220 10% 100%
- **Primary Brand**: 45 85% 45% (deeper amber)
- **Text Primary**: 220 15% 15%
- **Text Secondary**: 220 10% 45%

---

## Typography

### Font Families
- **Primary (Body/Chat)**: 'Inter', system-ui, sans-serif (excellent readability for long conversations)
- **Accent (Headers/Jordan's Name)**: 'Playfair Display', serif (intellectual, scholarly feel)

### Type Scale
- **Chat Message Text**: text-base (16px) - optimal reading size
- **Jordan's Responses**: text-base font-medium (slight weight for distinction)
- **User Messages**: text-base
- **Timestamps/Metadata**: text-xs (12px) text-secondary
- **Page Title**: text-3xl font-serif (Playfair)
- **Section Headers**: text-lg font-semibold

---

## Layout System

### Spacing Primitives
Use Tailwind units: **2, 4, 6, 8, 12, 16** for consistent rhythm
- Tight spacing: p-2, gap-2 (UI controls)
- Standard spacing: p-4, gap-4 (list items, cards)
- Comfortable spacing: p-6, gap-6 (message bubbles)
- Generous spacing: p-8, gap-8 (section separation)

### Container Strategy
- **Max Width**: max-w-4xl (optimal reading line length ~65-75 characters)
- **Chat Container**: Centered, max-w-3xl for conversation focus
- **Sidebar** (if added): w-64 on desktop, full-width drawer on mobile

---

## Component Library

### Chat Interface Components

**Message Bubbles**
- Jordan's messages: Full-width rows, left-aligned, with subtle background (220 15% 14%)
- User messages: Full-width rows, right-aligned content, amber-tinted background (45 20% 18%)
- Padding: p-6 for comfortable reading
- Rounded corners: rounded-2xl for modern, friendly feel
- Max width within container: No artificial constraints, let content breathe

**Input Area**
- Fixed bottom position or standard bottom placement
- Background: Surface Elevated (220 15% 16%)
- Border: Subtle top border for separation
- Textarea: Auto-expanding, min-h-24, max-h-48
- Send button: Amber primary color, rounded-xl, icon + text

**Conversation History**
- Scrollable main area with smooth scrolling
- Timestamp indicators between messages (text-xs, text-secondary)
- "New conversation" button clearly accessible
- Export/share conversation options

### Navigation & Header

**Top Bar**
- Background: Surface Elevated with subtle border-b
- Height: h-16
- Contains: Jordan Maxwell branding (with Playfair Display), theme toggle, optional menu
- Sticky positioning for persistent access

**Side Panel** (Desktop, optional)
- Conversation history list
- New chat button (prominent)
- Settings/preferences access
- Width: w-64, dark surface background

### Feedback & States

**Loading States**
- Typing indicator: Animated dots in amber color
- "Jordan is thinking..." text with subtle animation
- Skeleton screens for initial load

**Empty States**
- Centered welcome message with Jordan Maxwell quote
- Sample questions to start conversation
- Brief description of chatbot capabilities

**Error States**
- Inline error messages in amber/red tint
- Retry options clearly presented
- Graceful degradation messaging

---

## Interaction Patterns

**Conversation Flow**
- Messages appear with subtle fade-in (200ms)
- Auto-scroll to latest message
- Smooth transitions between states
- Click message to copy text functionality

**Keyboard Shortcuts**
- Enter to send (Shift+Enter for new line)
- Cmd/Ctrl + K for new conversation
- Cmd/Ctrl + / for keyboard shortcuts menu

**Responsive Behavior**
- Desktop: Side panel + main chat (if sidebar exists)
- Tablet: Collapsible drawer for history
- Mobile: Full-width chat, hamburger menu for history

---

## Special Features

**Jordan Maxwell Persona Indicators**
- Avatar/icon with symbolic imagery (eye, pyramid, or custom symbol)
- "Jordan Maxwell" name in Playfair Display above responses
- Subtle decorative elements (borders, icons) reflecting esoteric symbolism

**Context & Knowledge Display**
- Optional "Sources" or "Related Topics" section below responses
- Expandable references to Jordan Maxwell's actual teachings
- Visual indicators when pulling from specific videos/content

**Theme Toggle**
- Prominent sun/moon icon in header
- Smooth transition between themes (300ms)
- Persists user preference

---

## Accessibility & Performance

- High contrast ratios (WCAG AAA for body text)
- Focus indicators on all interactive elements (2px amber outline)
- Semantic HTML for screen readers
- Reduced motion option respects prefers-reduced-motion
- Lazy loading for conversation history
- Efficient re-rendering for new messages

---

## Images & Visual Assets

**No Hero Image Required** - This is a chat application focused on conversation.

**Icons Needed**
- Use Heroicons via CDN for all UI icons (send, menu, settings, copy, etc.)
- Custom Jordan Maxwell avatar icon (<!-- CUSTOM ICON: Jordan Maxwell symbolic representation -->)

**Background Textures** (Optional, Subtle)
- Very subtle noise texture on dark backgrounds for depth
- Minimal gradient overlays on header/footer if needed
- Keep textures at <5% opacity to maintain readability

---

## Animation Guidelines

**Use Sparingly**
- Message appear: fade + slide up (200ms ease-out)
- Typing indicator: subtle pulse animation
- Theme transition: 300ms color fade
- NO scroll-triggered animations
- NO decorative animations that distract from reading