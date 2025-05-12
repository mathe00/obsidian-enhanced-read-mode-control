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
*   **How?** Configure lists of files/folders in the plugin settings. Choose between "Default Read-Only" (opens in preview, can switch to edit) or "Strict Read-Only" (forced preview, cannot switch to edit). Folder rules apply strict mode to all notes within.
*   **Cool Features:** Separate lists for default/strict files, strict folder rules, commands to quickly toggle a note's status, debug logging option.
*   **Basically:** Define rules, control view modes reliably.

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

Whether you want to gently nudge certain notes to open in read mode first ("Default Read-Only") or completely lock down others to prevent any accidental changes ("Strict Read-Only"), this plugin offers the flexibility you need. Folder-level rules make it easy to manage large sets of notes, like archives or published content.

<a id="key-features"></a>
### Key Features:

*   **📝 Default Read-Only Files:** Specify files that should *open* in read mode (`preview`). You can still manually switch them to edit mode (`source`).
*   **🔒 Strict Read-Only Files:** Specify files that are *forced* into read mode. Any attempt to switch to edit mode will be immediately reverted. Ideal for protecting templates, published articles, or critical notes.
*   **📁 Strict Read-Only Folders:** Define entire folders (and their subfolders) where *all* notes within will be forced into strict read-only mode. Perfect for archives, shared resources, or sections you don't want to modify.
*   **↔️ Toggle Commands:** Quickly add or remove the *currently active note* to/from the "Default Read-Only" or "Strict Read-Only" list using commands from the Obsidian command palette (assign your own hotkeys!).
*   **⚙️ Simple Configuration:** Manage your file and folder lists easily through the plugin's settings tab.
*   **🐞 Debug Logging:** An optional setting to enable detailed console logs for troubleshooting.
*   **✅ Reliable State Management:** Ensures consistent view mode application, fixing issues like mode persistence when navigating within the same tab.

<a id="why-this-plugin"></a>
## Why this plugin? 🤔

Obsidian's built-in mechanism for remembering view modes can sometimes be unpredictable or insufficient for specific workflows. This plugin provides a layer of explicit control:

1.  **Guaranteed State:** Define exactly how certain notes or folders should behave, ensuring consistency regardless of Obsidian's internal state or potential future changes.
2.  **Enhanced Protection:** Go beyond simple mode memory with "Strict" mode to actively prevent accidental edits on critical notes like templates or finalized documents.
3.  **Bulk Configuration:** Easily manage the view mode for entire folders (like archives or published content) with folder-based rules.
4.  **Workflow Integration:** Use commands to quickly toggle a note's read-only status, integrating view mode control directly into your workflow.

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
*   Allow you to manually switch to edit mode (`source`) if needed.

This is useful for:
*   **Reference Notes:** Quickly view information without accidentally typing.
*   **Daily Notes / Journal Entries:** Start by reviewing, then switch to edit if you need to add something.
*   **Notes You Primarily Read:** Reduce friction for your most common interaction.

It provides reliable "open in read mode" behavior for the notes you specify.

<a id="roadmap"></a>
## 🚀 Future Features (Roadmap)

*   **✨ UI Enhancements:**
    *   **Path Autocompletion:** Implement autocompletion for file and folder paths in the settings tab to simplify configuration and reduce typos.
    *   **Visual File/Folder Picker:** Potentially add buttons in the settings tab to browse and select files/folders directly from the vault structure.
*   **🌍 Advanced Internationalization (i18n):**
    *   Translate all plugin settings UI text (labels, descriptions, button text) and command names into **30+ languages** to improve accessibility for a global user base.
*   **⚙️ More Granular Path & Folder Controls:**
    *   **Regex Support:** Allow the use of regular expressions for defining file and folder paths, offering more flexible matching capabilities.
    *   **Recursive Folder Option:** Add an explicit option for folder rules to specify whether to include only the immediate contents of a folder or to apply the rule recursively to all subfolders (currently, folder rules are always recursive; this would add a non-recursive option).
*   **👁️ Visual Feedback:**
    *   Consider adding a subtle icon in the editor's gutter or status bar to visually indicate when a note is actively being managed by this plugin (e.g., different icons for "default" vs "strict" modes).
*   **⚡ Performance Optimizations:**
    *   Continuously review and optimize performance, especially for users with very large vaults or extensive lists of configured paths.
*   **➕ Additional Control Options:**
    *   Explore options like temporary "override" commands to quickly disable read-mode enforcement for the current session or a specific note without changing settings.
    *   Investigate per-window or per-tab settings for more contextual control.

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

You will find the following options:

1.  **Default Read-Only Files:**
    *   Enter the full vault path for each file you want to open in "Default" read mode (one path per line).
    *   Example: `Reference/My Important Cheatsheet.md`
    *   These files open in `preview` but can be switched to `source`.

2.  **Strict Read-Only Files:**
    *   Enter the full vault path for each file you want to force into "Strict" read mode (one path per line).
    *   Example: `Templates/My Main Template.md`
    *   These files are locked into `preview`.

3.  **Strict Read-Only Folders:**
    *   Enter the vault path for each folder where *all* notes inside (including subfolders) should be forced into "Strict" read mode (one path per line).
    *   Example: `Archive/2023` or `Published Articles`
    *   Do **not** include leading or trailing slashes (`/`).

4.  **Enable Debug Logging:**
    *   Toggle this on to see detailed messages from the plugin in the developer console (access via `Ctrl+Shift+I` or `Cmd+Option+I`). Useful for troubleshooting. Requires a reload/restart to take full effect.

<a id="understanding-modes"></a>
### Understanding the Modes

*   **Default Read-Only:** Opens in `preview`. You **can** switch to `source` manually. Good for notes you mostly read but occasionally edit.
*   **Strict Read-Only:** Opens in `preview`. You **cannot** switch to `source` (plugin forces it back). Good for protecting notes from any edits.
*   **Folder Rules:** Always apply **Strict Read-Only** mode to all notes within the specified folder and its subfolders.
*   **Priority:** Folder rules override file rules. If a file is in a strict folder, it will be strict, even if it's also listed in the "Default" file list. Strict file rules override default file rules.

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
**A:** This plugin isn't just about remembering the mode; it's about **explicit control**. Obsidian's memory can sometimes be inconsistent due to various factors (sync, quick switching, other plugins). This plugin allows you to define *unbreakable rules* for specific notes or folders. Furthermore, it offers features beyond simple memory, like the "Strict" mode to actively prevent edits and folder-level rules for bulk management, ensuring your notes behave exactly as you intend, regardless of Obsidian's native behavior or potential future changes to it.

**Q: What's the difference between "Default" and "Strict" read-only?**
**A:**
*   **Default:** Opens in read mode, but you *can* switch to edit mode manually.
*   **Strict:** Opens in read mode, and you *cannot* switch to edit mode (the plugin prevents it).

**Q: How do folder rules interact with file rules?**
**A:** Folder rules take precedence. If a note is inside a "Strict Read-Only Folder", it will always be strict, regardless of whether it's listed in the "Default" or "Strict" file lists. If a note is listed in both "Default" and "Strict" file lists (and not in a strict folder), the "Strict" rule wins.

**Q: Will this slow down Obsidian?**
**A:** The plugin is designed to be lightweight. It primarily acts when files are opened or settings change. The `layout-change` listener for strict mode enforcement is optimized to only act when necessary. Performance impact should be minimal, but if you have thousands of rules or a very large vault, keep an eye on performance and report any issues. The debug logging option can be disabled for normal use.

**Q: Can I use wildcards or regex in the paths?**
**A:** Currently, no. The plugin uses exact path matching for files and `startsWith` matching for folders. Wildcard/regex support could be considered for future versions if there's demand.
