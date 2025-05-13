# ✨ Enhanced Read Mode Control for Obsidian

<p align="center">
  <img src="images/logo.png" alt="Enhanced Read Mode Control Logo" width="150">
  <br/>
  <em>Take full control of your notes' view modes!</em>
</p>

## **🔒 Force specific notes or entire folders into read-only mode!**

Tired of Obsidian forgetting your preferred view mode? Need to protect certain notes from accidental edits? **Enhanced Read Mode Control** gives you granular control over which notes open in reading mode (`preview`) by default, and which ones are strictly locked into it.

> Ever wished you could ensure your templates, published notes, or archived content *always* stay in read mode, no matter what? Or just have certain notes *default* to read mode when opened? This plugin makes it happen! 🙌

<a id="tldr"></a>
## TL;DR (Too Long; Didn't Read)

*   **What is this?** An Obsidian plugin to force specific notes or folders into read-only mode.
*   **Why?** Provides explicit and persistent control over view modes, independent of Obsidian's native behavior. Protect notes from accidental edits.
*   **How?** Configure lists of files/folders (exact paths or Regex BETA) in the plugin settings. Choose between "Default Read-Only" or "Strict Read-Only". Folder rules apply strict mode.
*   **Cool Features:** Exact path & Regex (BETA) matching, default/strict file lists, strict folder rules, toggle commands, configurable same-tab behavior, optional notifications (BETA), debug logging.
*   **Basically:** Define rules (simple or advanced), control view modes reliably.

---

**Table of Contents**

-   [TL;DR](#tldr)
-   [Description](#description)
    -   [Key Features](#key-features)
-   [Why this plugin? 🤔](#why-this-plugin)
    -   [Feature Highlight: Strict Mode & Folder Rules 🛡️](#strict-mode-feature)
    -   [Feature Highlight: Default Mode - A Better Memory ✨](#default-mode-feature)
-   [🚀 Future Features (Roadmap)](#roadmap)
-   [🛠️ Installation](#installation)
    -   [From Obsidian Community Plugins (Recommended - When Available)](#install-community)
    -   [Manual Installation (Using Releases)](#install-manual)
-   [⚙️ Configuration](#configuration)
    -   [Settings Tab](#settings-tab)
    -   [Understanding the Modes](#understanding-modes)
    -   [Handling Same-Tab Navigation Issues (Important!)](#same-tab-handling)
-   [⌨️ Commands](#commands)
-   [💖 Support the Project](#support-the-project)
-   [⭐ Show Your Support](#support-star)
-   [🛠️ Contributing / Developer Setup](#contributing)
-   [License](#license)
-   [🤔 FAQ (Frequently Asked Questions)](#faq)

---

<a id="description"></a>
## Description

💻 **Enhanced Read Mode Control** provides robust control over the view mode (reading or editing) of your notes in Obsidian. While Obsidian attempts to remember the last mode for each note, this plugin allows you to define explicit, persistent rules, ensuring specific notes or entire sections of your vault behave exactly as you intend regarding their editability, regardless of Obsidian's native functionality.

Whether you want to gently nudge certain notes to open in read mode first ("Default Read-Only") or completely lock down others to prevent any accidental changes ("Strict Read-Only"), this plugin offers the flexibility you need. Folder-level rules make it easy to manage large sets of notes, like archives or published content. It also includes an option to address a specific Obsidian behavior when navigating between notes in the same tab.

<a id="key-features"></a>
### Key Features:

*   **📝 Default Read-Only Files/Regex (BETA):** Specify files (by exact path or Regex pattern) that should *open* in read mode (`preview`). You can still manually switch them to edit mode (`source`), though this might be reverted by frequent checks.
*   **🔒 Strict Read-Only Files/Regex (BETA):** Specify files (by exact path or Regex pattern) that are *forced* into read mode. Any attempt to switch to edit mode will be immediately reverted.
*   **📁 Strict Read-Only Folders:** Define entire folders (and their subfolders) where *all* notes within will be forced into strict read-only mode (uses exact path matching).
*   **↔️ Toggle Commands:** Quickly add or remove the *currently active note* to/from the "Default Read-Only" or "Strict Read-Only" *exact path* lists using commands.
*   **⚙️ Configurable Behavior:** Choose how the plugin handles notes *not* explicitly listed in its settings, especially regarding a same-tab navigation quirk.
*   **🔔 Optional Notifications (BETA):** Get a brief notification when the plugin actively changes a note's view mode.
*   **🐞 Debug Logging:** An optional setting to enable detailed console logs for troubleshooting.
*   **✅ Reliable State Management:** Ensures consistent view mode application based on your rules and chosen behavior.
*   **✨ Improved Settings UI:** Manage exact path lists with autocompletion and an interactive add/remove interface.

<a id="why-this-plugin"></a>
## Why this plugin? 🤔

Obsidian's built-in mechanism for remembering view modes can sometimes be unpredictable or insufficient for specific workflows. This plugin provides a layer of explicit control:

1.  **Guaranteed State:** Define exactly how certain notes or folders should behave, ensuring consistency regardless of Obsidian's internal state or potential future changes.
2.  **Enhanced Protection:** Go beyond simple mode memory with "Strict" mode to actively prevent accidental edits on critical notes like templates or finalized documents.
3.  **Bulk Configuration:** Easily manage the view mode for entire folders (like archives or published content) with folder-based rules.
4.  **Workflow Integration:** Use commands to quickly toggle a note's read-only status, integrating view mode control directly into your workflow.
5.  **Address Quirks:** Provides options to handle specific Obsidian behaviors, like view mode persistence during same-tab navigation.

**Enhanced Read Mode Control** gives you the power to define and enforce your desired view mode behavior reliably.

<a id="strict-mode-feature"></a>
### Feature Highlight: Strict Mode & Folder Rules 🛡️

The **Strict Read-Only** mode is a key feature. When applied to a file or a folder:

*   The note(s) will always open in read mode (`preview`).
*   If you try to switch to edit mode (using the UI button or a hotkey), the plugin will **immediately switch it back** to read mode.

This is perfect for:
*   **Templates:** Prevent accidental modifications.
*   **Published Content:** Keep the final version pristine.
*   **Archived Notes:** Ensure historical records remain untouched.
*   **Shared Vault Sections:** Protect notes in collaborative environments (within the limits of Obsidian's model).

The **Folder Rules** make applying strict mode incredibly efficient – just specify the folder path, and all notes inside are protected.

<a id="default-mode-feature"></a>
### Feature Highlight: Default Mode - A Better Memory ✨

The **Default Read-Only** mode offers a gentler approach. Notes in this list will:

*   Open in read mode (`preview`) when first loaded in a tab.
*   Allow you to manually switch to edit mode (`source`) if needed (though this might be reverted by the `layout-change` event depending on timing).

This is useful for:
*   **Reference Notes:** Quickly view information without accidentally typing.
*   **Daily Notes / Journal Entries:** Start by reviewing, then switch to edit if you need to add something.
*   **Notes You Primarily Read:** Reduce friction for your most common interaction.

It provides reliable "open in read mode" behavior for the notes you specify.

<a id="roadmap"></a>
## 🚀 Future Features (Roadmap)

*   **🌍 Advanced Internationalization (i18n):**
    *   Translate all plugin settings UI text (labels, descriptions, button text) and command names into **30+ languages** to improve accessibility for a global user base.
*   **⚙️ More Granular Path & Folder Controls:**
    *   **Recursive Folder Option:** Add an explicit option for folder rules to specify whether to include only the immediate contents of a folder or to apply the rule recursively to all subfolders (currently, folder rules are always recursive; this would add a non-recursive option).
*   **👁️ Visual Feedback:**
    *   Consider adding a subtle icon in the editor's gutter or status bar to visually indicate when a note is actively being managed by this plugin (e.g., different icons for "default" vs "strict" modes).
*   **⚡ Performance Optimizations:**
    *   Continuously review and optimize performance, especially for users with very large vaults or extensive lists of configured paths.
*   **➕ Additional Control Options:**
    *   Explore options like temporary "override" commands to quickly disable read-mode enforcement for the current session or a specific note without changing settings.
    *   Investigate per-window or per-tab settings for more contextual control.
*   **✨ UI Enhancements for Settings:**
    *   Further refine the settings UI, potentially adding a visual file/folder picker if feasible.

<a id="installation"></a>
## 🛠️ Installation

<a id="install-community"></a>
### From Obsidian Community Plugins (Recommended - When Available)

> **Status:** This plugin might not be in the community store yet.

Once available:

1.  Open Obsidian **Settings**.
2.  Go to **Community plugins**.
3.  Ensure **Safe mode** is **off**.
4.  Click **Browse** community plugins.
5.  Search for "**Enhanced Read Mode Control**".
6.  Click **Install**.
7.  Once installed, click **Enable**.
8.  Proceed to the [Configuration](#configuration) section below.

<a id="install-manual"></a>
### Manual Installation (Using Releases)

1.  Go to the [**Releases page**](https://github.com/mathe00/obsidian-enhanced-read-mode-control/releases) of this repository.
2.  Download the latest release archive (`enhanced-read-mode-control-X.Y.Z.zip` or similar). Download `main.js`, `manifest.json`, and `styles.css`.
3.  Navigate to your Obsidian vault's configuration folder: `<your-vault>/.obsidian/plugins/`.
4.  Create a new folder named `enhanced-read-mode-control`.
5.  Copy the downloaded `main.js`, `manifest.json`, and `styles.css` into the newly created `enhanced-read-mode-control` folder.
6.  **Restart Obsidian** or use `Reload app without saving` from the command palette.
7.  Go to **Settings** > **Community plugins**, find "Enhanced Read Mode Control" in the list of installed plugins, and **enable it**.
8.  Proceed to the [Configuration](#configuration) section.

<a id="configuration"></a>
## ⚙️ Configuration

<a id="settings-tab"></a>
### Settings Tab

Configure the plugin via **Settings** > **Community Plugins** > **Enhanced Read Mode Control** (click the gear icon).

You will find the following options grouped by functionality:

**1. Exact Path Matching:**

*   **Default Read-Only Files (Exact Paths):**
    *   Files listed here (using their full vault path) will open in "Default" read mode.
    *   Uses an interactive list with path autocompletion.
*   **Strict Read-Only Files (Exact Paths):**
    *   Files listed here (full vault path) will be forced into "Strict" read mode.
    *   Uses an interactive list with path autocompletion.
*   **Strict Read-Only Folders (Exact Paths):**
    *   All notes within these folders (full vault path, no leading/trailing slashes) will be forced into "Strict" read mode.
    *   Uses an interactive list with path autocompletion.

**2. Regex Path Matching (BETA):**

*   **Enable Regex Matching (BETA):**
    *   A toggle to enable/disable matching file paths against regular expressions.
    *   **Caution:** Invalid regex patterns can cause errors. Regex matching is checked *after* exact folder/file matches.
*   **Default Read-Only (Regex Patterns):**
    *   (Visible if Regex Matching is enabled) File paths matching any JavaScript regex pattern here will open in "Default" read mode. One pattern per line (without leading/trailing slashes `/`).
    *   Example: `^Journal/\d{4}-\d{2}-\d{2}\.md$`
*   **Strict Read-Only (Regex Patterns):**
    *   (Visible if Regex Matching is enabled) File paths matching any JavaScript regex pattern here will be forced into "Strict" read mode. One pattern per line.
    *   Example: `^Templates/.*`

**3. Behavior:**

*   **Force Edit Mode on Unmanaged Notes:**
    *   This setting addresses an Obsidian behavior quirk. **Problem:** When navigating from a plugin-controlled note (read-only) to a normal note **in the same tab**, the normal note might incorrectly stay in read-only mode.
    *   **Option 1: DISABLED (Default):**
        *   **Action:** Plugin NEVER forces edit mode on normal notes.
        *   **Benefit:** Fully respects manual changes. If you set a normal note to read-only, it stays that way.
        *   **Drawback:** The "stuck in read-only" bug in the same tab remains. You must manually switch back to edit mode in that specific case.
    *   **Option 2: ENABLED:**
        *   **Action:** Plugin forces ANY normal note found in read-only mode back into edit mode upon opening.
        *   **Benefit:** Fixes the "stuck in read-only" bug for same-tab navigation.
        *   **Drawback:** Overrides manual choices. If you set a normal note to read-only, this plugin WILL force it back to edit mode when you reopen it.
    *   Choose the behavior that best suits your workflow.

**4. Feedback & Debugging:**

*   **Notify on Mode Change (BETA):**
    *   Show a brief notification when the plugin actively changes a note's view mode upon opening.
*   **Enable Debug Logging:**
    *   Toggle this on to see detailed messages from the plugin in the developer console. Useful for troubleshooting. Requires a reload/restart to take full effect.

<a id="understanding-modes"></a>
### Understanding the Modes

*   **Default Read-Only:** Opens in `preview`. You **can** try to switch to `source` manually, but the plugin might switch it back due to frequent checks (especially via `layout-change`). Consider this mode primarily for notes you rarely edit.
*   **Strict Read-Only:** Opens in `preview`. You **cannot** switch to `source` (plugin forces it back). Good for protecting notes from any edits.
*   **Folder Rules:** Always apply **Strict Read-Only** mode to all notes within the specified folder and its subfolders.
*   **Priority:** Folder rules override file rules. If a file is in a strict folder, it will be strict, even if it's also listed in the "Default" file list. Strict file rules override default file rules.

<a id="same-tab-handling"></a>
### Handling Same-Tab Navigation Issues (Important!)

As explained in the "**Force Edit Mode on Unmanaged Notes**" setting, there's a trade-off:

*   If you **disable** the setting (default), the plugin fully respects notes you manually set to read-only, but you might encounter the visual glitch where a normal note stays in read mode after navigating from a controlled note in the same tab.
*   If you **enable** the setting, the visual glitch is fixed, but the plugin will override any manual read-only state you set on normal notes.

Choose the option that causes less friction for your specific usage pattern.

<a id="commands"></a>
## ⌨️ Commands

The plugin adds two commands to the Obsidian Command Palette (accessible via `Ctrl+P` or `Cmd+P`):

1.  **Enhanced Read Mode Control: Toggle default read-only for current note**
    *   Adds the active note to the "Default Read-Only" list if it's not there.
    *   Removes it from the "Default Read-Only" list if it is there.
    *   If the note was in the "Strict" list, it moves it to the "Default" list.
    *   Applies the mode immediately.

2.  **Enhanced Read Mode Control: Toggle strict read-only for current note**
    *   Adds the active note to the "Strict Read-Only" list if it's not there.
    *   Removes it from the "Strict Read-Only" list if it is there.
    *   If the note was in the "Default" list, it moves it to the "Strict" list.
    *   Applies the mode immediately.

You can assign custom hotkeys to these commands in Obsidian's **Settings** > **Hotkeys**.

<a id="support-the-project"></a>
## 💖 Support the Project

If you find this plugin valuable, especially if it enhances your workflow or protects your important notes, please consider making a donation.

Developing and maintaining plugins involves time and effort, often supported by community contributions. Even a small amount is greatly appreciated and helps support continued maintenance and future improvements.

I currently accept donations through:

**Bitcoin**
`zpub6nL6JpeLNPiK44KpPbBxQc8emSar7ZsbvLf1vbQsYmUAaHNj289i9q2XtE4H5cYLiFCxWSpWP88HBf7F75n34998LDutyHkdzKBJYxyMDoQ`

**Ethereum**
`0xe0b8007dca71940ab09a2e025f111216f0eb1c4e`

If you have any questions about donations or encounter any issues, please feel free to open a GitHub issue.

<a id="support-star"></a>
## ⭐ Show Your Support

If this plugin helps you manage your notes better, please consider starring the repository on GitHub! Feedback and suggestions via Issues are also welcome.

<a id="contributing"></a>
## 🛠️ Contributing / Developer Setup

Contributions are welcome!

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/mathe00/obsidian-enhanced-read-mode-control.git
    ```
2.  **Navigate into the project folder**:
    ```bash
    cd obsidian-enhanced-read-mode-control/
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Build the project**:
    ```bash
    npm run build
    ```
    Or run `npm run dev` to automatically rebuild on file changes.
5.  **Install in Obsidian for Testing**:
    -   Copy the generated `main.js`, `manifest.json`, and `styles.css` into a dedicated folder within your vault's plugin directory (e.g., `<your-vault>/.obsidian/plugins/enhanced-read-mode-control-dev/`).
    -   Enable the plugin in Obsidian.

<a id="license"></a>
## License

This plugin is released under the [MIT License](LICENSE).

---

<a id="faq"></a>
## 🤔 FAQ (Frequently Asked Questions)

**Q: Why use this plugin if Obsidian already tries to remember the view mode?**
**A:** This plugin isn't just about remembering the mode; it's about **explicit control**. Obsidian's memory can sometimes be inconsistent. This plugin allows you to define *unbreakable rules* for specific notes or folders. It also offers features beyond simple memory, like the "Strict" mode to actively prevent edits, folder-level rules, and configurable handling of Obsidian's same-tab navigation behavior.

**Q: What's the difference between "Default" and "Strict" read-only?**
**A:**
*   **Default:** Opens in read mode. Switching to edit mode manually *might* work temporarily, but the plugin often switches it back quickly due to its checks. Best for notes you very rarely edit.
*   **Strict:** Opens in read mode, and you *cannot* switch to edit mode (the plugin prevents it).

**Q: Why can't I easily switch a "Default Read-Only" note to edit mode?**
**A:** To ensure notes consistently open in read mode (fixing multi-tab and initial state issues), the plugin frequently checks and enforces the 'preview' state for 'default' notes, especially on `layout-change`. This makes manually switching to 'source' mode difficult as it often gets reverted quickly. If you need to edit these notes frequently, consider not adding them to the 'default' list or using the 'strict' list only for truly protected notes.

**Q: What is the "Force Edit Mode on Unmanaged Notes" setting for?**
**A:** It addresses a specific issue: when navigating from a read-only note (controlled by this plugin) to a normal note *in the same tab*, the normal note might get stuck in read mode.
*   **Disabling** this setting (default) respects any manual read-only state you set on normal notes, but the same-tab issue might occur (requiring a manual switch back to edit).
*   **Enabling** this setting fixes the same-tab issue but will override any manual read-only state you set on normal notes, forcing them back to edit mode when opened. Choose the option that best fits your workflow.

**Q: How do folder rules interact with file rules?**
**A:** Folder rules take precedence. If a note is inside a "Strict Read-Only Folder", it will always be strict, regardless of whether it's listed in the "Default" or "Strict" file lists. If a note is listed in both "Default" and "Strict" file lists (and not in a strict folder), the "Strict" rule wins.

**Q: Will this slow down Obsidian?**
**A:** The plugin is designed to be lightweight. Performance impact should be minimal. The `layout-change` listener is the most active part; if you experience slowdowns with extremely large vaults or many rules, consider disabling debug logging first. Report any significant performance issues.

**Q: Can I use wildcards or regex in the paths?**
**A:** Currently, no. The plugin uses exact path matching for files and `startsWith` matching for folders. Regex support is on the roadmap.

**Q: How does Regex matching work?**
**A:** When enabled, the plugin will test note paths against your defined regex patterns. Strict regex rules are checked before default regex rules. This is a BETA feature, so use valid JavaScript regex syntax. Exact path matches (folders and files) always take precedence over regex matches.
