---
name: Magic System
description: Landing site for an AI Forward Deployed Engineer, drawn as a mission flight plan on ruled paper.
colors:
  paper: "#eceee9"
  sheet: "#f6f7f3"
  ink: "#15171a"
  ink-muted: "#4a4f55"
  rule: "#c6cbc3"
  slate: "#1e3245"
  slate-ink: "#e7edf2"
  slate-muted: "#a9bccc"
  signal: "#e5560f"
  signal-fill: "#b8410a"
  signal-fill-hover: "#963306"
  tab: "#f2c230"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(46px, 6.6vw, 96px)"
    fontWeight: 850
    lineHeight: 0.94
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 80"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(36px, 5vw, 64px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 92"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(24px, 2.4vw, 32px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 95"
  lede:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(18px, 1.5vw, 21px)"
    fontWeight: 400
    lineHeight: 1.55
  statement:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(20px, 2vw, 26px)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  close:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(40px, 6vw, 84px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "\"wdth\" 82"
  item:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.015em"
    fontVariation: "\"wdth\" 90"
  intro:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "\"wdth\" 100"
  small:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "12.5px"
    fontWeight: 650
    letterSpacing: "0.07em"
    fontFeature: "\"tnum\""
    fontVariation: "\"wdth\" 75"
  type:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "14px"
    fontWeight: 400
    letterSpacing: "0"
    fontFeature: "\"tnum\""
  type-met:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "clamp(30px, 3.4vw, 44px)"
    fontWeight: 700
    lineHeight: 1
rounded:
  control: "3px"
  dot: "50%"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  section: "clamp(80px, 10vw, 136px)"
  columns: "clamp(32px, 5vw, 72px)"
  row: "13px"
  rail: "148px"
  max: "1240px"
components:
  go-control:
    backgroundColor: "{colors.signal-fill}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "16px 22px 16px 18px"
  go-control-hover:
    backgroundColor: "{colors.signal-fill-hover}"
    textColor: "{colors.white}"
  go-control-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  go-control-compact:
    backgroundColor: "{colors.signal-fill}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
  stamp-planned:
    textColor: "{colors.slate-muted}"
    typography: "{typography.type}"
    rounded: "{rounded.control}"
    padding: "8px 14px"
  stamp-go:
    backgroundColor: "{colors.signal-fill}"
    textColor: "{colors.white}"
    typography: "{typography.type}"
    rounded: "{rounded.control}"
    padding: "8px 14px"
  sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    padding: "13px 18px"
  slate-field:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.slate-ink}"
    padding: "clamp(72px, 9vw, 120px) 0"
  nav-link:
    textColor: "{colors.ink-muted}"
    typography: "{typography.body}"
---

# Design System: Magic System

## Overview

**Creative North Star: "The Mission Flight Plan"**

Every surface is a printed flight-plan document: cool ruled paper, black ink, hairline rules, tabbed sheets clipped to the page, and a mission-elapsed-time column running down the left edge. Information is set the way an operations team would set it: parameter rows, go/no-go polls, manifests with a "verified by" column, crew records. Nothing floats; everything sits on a rule.

Density is document-like rather than marketing-like. Sections are separated by generous vertical air, but inside a section content is packed into ruled rows with tight, consistent padding. Two kinds of ground alternate: the paper (light, ruled) and the console slate (a deep blue-grey field that runs full-bleed for the plan and the closing call). Colour beyond ink is rationed: signal orange means go, now, or focus; checklist yellow is only ever a paper tab.

One variable family, Archivo, carries the whole hierarchy by moving along both weight and width. A typewriter face, Courier Prime, appears only where a machine or a mission clock would print: elapsed time, phase markers, gate conditions, status stamps.

**Key Characteristics:**
- Ruled paper ground with hairline (1px) and heavy (2px) ink rules as the primary structure.
- A fixed mission-time rail on the left edge, with a live T+ clock and a progress cursor.
- Full-bleed slate fields for the plan and the close; paper everywhere else.
- Signal orange reserved for go, now and focus; yellow reserved for sheet tabs and selection.
- Archivo across widths (70 to 112) for all hierarchy; Courier Prime for mission time and record entries only.
- Square corners; the only softening is 3px on controls and stamps.

## Colors

A cool, near-neutral paper-and-ink palette with one deep slate field, one signal orange, and one tab yellow.

### Primary
- **Signal Orange** (`signal`): the GO colour. The goal condition in the display headline, the current-phase dot on the rail, the rail progress cursor, the focus ring and the text caret. Contrast on paper is 3.17:1, so it is only ever display-size text or a non-text mark.
- **Burnt Go** (`signal-fill`): the fill of every GO control and every GO stamp, White on it reads 5.53:1; on paper it reads 4.73:1.
- **Burnt Go, Pressed Deeper** (`signal-fill-hover`): GO control hover, and small GO text (poll cells), which must clear 4.5:1 on the 7% signal wash.

### Secondary
- **Console Slate** (`slate`): full-bleed fields for the flight plan and the closing call. Text on slate is `slate-ink` for reading copy, `white` for headings and active states, `slate-muted` for supporting copy and dormant markers. Rules on slate are `slate-muted` at 28% to 50% alpha; never ink rules.
- **Slate Ink** (`slate-ink`) and **Slate Haze** (`slate-muted`): the two text tones of the slate field (11.14:1 and 6.73:1).

### Tertiary
- **Checklist Tab** (`tab`): the coloured tab clipped to the top of a sheet (a small notch on the parameters sheet, a full-width strip on the crew record) and the text-selection background. Never text, never a section fill.

### Neutral
- **Flight-Plan Paper** (`paper`): page ground, rail ground, and the browser theme colour.
- **Sheet** (`sheet`): the slightly lighter paper of a clipped-on sheet (parameter block, crew record, featured manifest row) and the hover wash on log entries.
- **Ink** (`ink`): body text, headings, and heavy rules (sheet borders, section top rules, header and rail dividers). 15.37:1 on paper.
- **Pencil** (`ink-muted`): secondary copy, labels, column heads, dormant rail entries. 7.07:1 on paper.
- **Hairline** (`rule`): the 1px divider between rows inside a sheet, poll, manifest or log.
- **White** (`white`): text on GO fills and headings on slate.

### Named Rules
**The GO-Only Rule.** Signal orange and its fills mean go, now, or keyboard focus. If an element is not a GO control, a GO status, the current position on the timeline, or a focus indicator, it is not orange.

**The Two-Orange Rule.** `signal` is used as text only at display size (46px and up) and otherwise only for non-text marks. Any orange text smaller than that, and any orange surface carrying text, uses `signal-fill`.

**The Tab Rule.** Yellow is a paper tab, not an accent. It sits flush to the top edge of a sheet with an ink border, or it highlights a selection; it never colours type.

## Typography

**Display Font:** Archivo (with Helvetica Neue, Arial)
**Body Font:** Archivo (with Helvetica Neue, Arial)
**Label/Mono Font:** Courier Prime (with Courier New), for mission time only

**Character:** A grotesque that works like a stencil set: condensed and heavy for headings and labels, normal width for reading, wide only for the wordmark. The typewriter face is the document's machine voice, printing times and statuses beside the human copy.

### Hierarchy
- **Display** (850, clamp 46px to 96px, 0.94, width 80): the single objective headline at the top of the page. Tight negative tracking (-0.035em).
- **Headline** (800, clamp 36px to 64px, 1.0, width 92): section headings. The closing heading runs larger (clamp 40px to 84px, width 82) on slate. A heading may drop a clause to `ink-muted` at width 70 to set a rejected option against the chosen one.
- **Title** (800, clamp 24px to 32px, width 95): phase names on the plan; manifest item names run at 22px, width 90.
- **Statement** (500, clamp 20px to 26px, 1.4): the crew note, a short first-person statement capped at 30ch.
- **Item** (800, 22px, width 90): manifest item names.
- **Body** (400, 17px, 1.55): all reading copy and sheet values. **Intro** (19px) sets section intros in `ink-muted`, capped at 60ch, and the wordmark size; **Small** (15px) sets nav links, poll cells, log descriptions, channel links and the Verified-by column; the lede runs at clamp 18px to 21px, capped at 54ch; phase copy caps at 62ch.
- **Label** (650, 12.5px, 0.07em, uppercase, width 75, tabular figures): column heads, parameter keys, sheet headers and footers, log entry kinds, factory stages, and the document ID in the header.
- **Type** (Courier Prime 400 or 700, tabular figures): the MET clock (17px bold), rail phase list (13px), phase markers (clamp 30px to 44px bold), gate conditions (14px), and status stamps (14px bold, 0.1em, uppercase).

### Named Rules
**The One Family, Many Widths Rule.** Hierarchy comes from Archivo's width axis as much as its weight. Condensed (70 to 80) for display and labels, 90 to 95 for headings and titles, 100 for reading, 112 only for the wordmark. Do not introduce a second sans or a separate display face.

**The Typewriter Rule.** Courier Prime prints only what a mission clock or checklist would print: elapsed time, phase codes (T-1, T+0, EOM), gate conditions and statuses. It never sets a paragraph, a heading, or a button label.

## Layout

The page is a single document column, max 1240px, with a fluid side gutter (`spacing.gutter`), offset on desktop by the fixed 148px mission-time rail on the left. Sections are separated by `spacing.section` of top padding; two-column sections (objective, role, crew) split roughly 1.1 : 1 with a `spacing.columns` gap and collapse to one column below 1100px.

Slate fields break out of the column and run full-bleed, re-centring their content on the same max width and gutter, so the column edge stays continuous across paper and slate.

Inside a section, content lives in ruled rows. Sheets and records use a fixed key column (96px for parameters, 120px for crew records and phases) beside a fluid value column, with 13px vertical row padding. The flight log sets entries in two newspaper columns (48px gap) that drop to one below 860px.

Breakpoints: below 1100px the header drops its document ID and the two-column sections stack; below 860px the rail becomes a 46px top strip showing only the current phase with a horizontal progress bar along its bottom edge, the nav collapses to the GO control, and the manifest table reflows into stacked records; below 520px key/value rows stack.

**The MET Rail Rule.** The mission-time rail is the page's spine: fixed to the left edge on desktop, a top strip on mobile, always showing elapsed time and the current phase. Content never overlaps it, and nothing else is fixed.

## Elevation & Depth

The system is paper-flat. Depth is conveyed by ground changes (paper, lighter sheet, slate field) and by rule weight (1px hairline inside, 1px ink around sheets, 2px ink as the top rule of tables and polls). The single shadow in the system sits under the GO control, a soft two-layer lift that disappears when the control is pressed.

### Shadow Vocabulary
- **GO lift** (`box-shadow: 0 1px 2px rgba(21,23,26,.25), 0 6px 14px -8px rgba(21,23,26,.45)`): the resting state of every GO control. Removed on press.

### Named Rules
**The Paper-Flat Rule.** Sheets, records, tables and fields carry no shadow. A sheet is distinguished by its lighter paper, its ink border and its tab, not by lift.

## Shapes

Corners are square. Sheets, tables, the rail, slate fields and gate tags have no radius. The only rounding is 3px on GO controls and status stamps, enough to read as a rubber-stamped or moulded object. Phase dots on the rail are 7px circles. Status stamps are rotated -4deg, as if stamped by hand; gate conditions sit in a dashed 1px box; the GO control's stamp segment is divided from its label by a dashed rule. The rail carries a column of 1px graduations, like a ruled time scale.

**The Square-Cut Rule.** Nothing gets more than 3px of radius, and only controls and stamps get that. Containers are cut square.

## Components

### Buttons
The GO control: a two-part pressable tag, stamp on the left, action on the right.
- **Shape:** gently softened corners (3px).
- **Primary:** `signal-fill` ground, white bold Archivo at 17px. A condensed, tracked "GO" stamp segment (width 75, 800, 0.1em) is separated from the label by a dashed white rule at 55% alpha. Label padding 16px 22px 16px 18px; the large variant runs clamp 18px to 24px with 22px 30px padding.
- **Hover / Focus:** hover deepens to `signal-fill-hover` and lifts 1px; pressed drops 1px, turns ink, and loses its shadow (on slate, pressed turns white with ink text). Focus is the global 2px signal-orange outline at 3px offset. Transitions 0.2s on the system ease.
- **Compact:** the header GO is a single condensed, tracked segment (8px 16px, 14px).
- **Text link with arrow:** semibold, underlined at 0.3em offset, with an inline 16px stroke arrow that slides 4px right on hover. This is the only secondary action style.

### Status stamps
- **Style:** Courier Prime bold, 14px, uppercase, 0.1em tracking, 2px border, 3px radius, rotated -4deg.
- **State:** "Planned" sits in `slate-muted` with a translucent border; when its phase scrolls past the reading line it flips to "GO" on a `signal-fill` ground with white text, landing with a 0.45s stamp-in (scale 1.45 to 1, rotation -9deg to -4deg).

### Cards / Containers
The sheet, a document clipped onto the page.
- **Corner Style:** square.
- **Background:** `sheet` on the `paper` ground.
- **Shadow Strategy:** none (The Paper-Flat Rule).
- **Border:** 1px ink all round; internal rows divided by 1px hairlines; header and footer rows divided by ink.
- **Tab:** a `tab` yellow tab with ink border, either a 56 by 10px notch near the top right or a full-width 14px strip.
- **Internal Padding:** 13px rows, 18px to 22px side padding; keys in Label style, values in body weight 500 to 600.

### Tables and polls
- **Style:** a 2px ink top rule, Label-style column heads in `ink-muted`, 1px hairline row dividers, no vertical rules and no zebra striping.
- **Poll cells:** condensed uppercase status words. No-go is struck through in `ink-muted`; hold values are plain `ink-muted`; GO is 800 weight `signal-fill-hover`, and the chosen column carries a 7% signal wash.
- **Featured row:** a manifest row may sit on `sheet` paper, bled 20px past the table edge on both sides.

### Navigation
- **Header:** wordmark (circle-M mark plus Archivo 800 at width 112) on the left, document ID in Label style in the middle, then text links (15px, 500, `ink-muted`; ink and underlined on hover) ending in the compact GO. A 1px ink rule closes the header. Below 860px only the wordmark and GO remain.
- **Rail:** Courier Prime phase list with bold phase codes. Each entry has a 7px dot on a hairline: completed phases turn ink (dot and line), the current phase gets a signal-orange dot, upcoming phases stay `ink-muted` with hollow dots. A 3px signal-orange cursor grows from the first dot to the last as the reader moves through the plan.

### Flight log entries
Ruled link rows: a Label-style kind in an 88px column, an 18px bold name, a 15px `ink-muted` description. On hover the row takes the `sheet` wash and the text slides 8px right, with the name underlined.

### Phase row (signature)
A three-part row on slate: a large Courier Prime phase marker (`slate-muted`, white once passed), the phase title and copy with a dashed gate tag beneath, and a status stamp at the far right. Rows are divided by translucent slate-muted rules. Below 860px the marker and stamp share the first line and the body runs full width beneath.

## Do's and Don'ts

### Do:
- **Do** put structure on rules: 1px `rule` between rows, 1px `ink` around sheets, 2px `ink` on the top edge of tables, polls and logs.
- **Do** keep orange for go, now and focus (The GO-Only Rule), and use `signal-fill` for any orange below display size (The Two-Orange Rule).
- **Do** set every key, column head and sheet header in the Label style (12.5px, 650, uppercase, 0.07em, width 75, tabular figures).
- **Do** use Courier Prime for mission time, phase codes, gate conditions and statuses, and nothing else.
- **Do** run slate fields full-bleed with content re-centred on the 1240px column, and use translucent `slate-muted` rules on slate.
- **Do** honour `prefers-reduced-motion`: the system turns off smooth scroll, transitions and the stamp animation entirely.
- **Do** keep motion on the system ease (`cubic-bezier(.16, 1, .3, 1)`), 0.2s for controls, 0.3s for the rail, 0.35s to 0.5s for stamps.

### Don't:
- **Don't** use signal orange as a decorative accent, a section colour, a border colour for ordinary containers, or an icon tint.
- **Don't** set `signal` (#e5560f) as text below 46px on paper.
- **Don't** use tab yellow for type or as a background behind copy.
- **Don't** round containers or put shadows on sheets, tables or slate fields; the GO lift is the only shadow.
- **Don't** set paragraphs, headings or button labels in Courier Prime.
- **Don't** introduce a second sans or a separate display face; reach for Archivo's width axis instead.
- **Don't** lay out capabilities or services as a grid of floating cards; they are rows in a ruled manifest or sheet.
- **Don't** add small uppercase kicker or eyebrow lines above section headings; the Label style is for keys, column heads and sheet edges.
