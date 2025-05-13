// src/suggesters.ts

import { App, AbstractInputSuggest, TFolder, TFile, TAbstractFile } from 'obsidian';

export class FolderSuggest extends AbstractInputSuggest<TFolder> {
	constructor(app: App, private inputEl: HTMLInputElement) { // Type changed to HTMLInputElement
		super(app, inputEl);
	}

	getSuggestions(inputStr: string): TFolder[] {
		const lowerCaseInputStr = inputStr.toLowerCase();
		const allFiles = this.app.vault.getAllLoadedFiles();
		const folders: TFolder[] = [];

		if (!inputStr.trim()) {
			allFiles.forEach((file: TAbstractFile) => {
				if (file instanceof TFolder && !file.path.includes('/')) {
					if (file.name !== '.obsidian' && !file.name.startsWith('.')) {
						folders.push(file);
					}
				}
			});
			folders.sort((a, b) => a.path.localeCompare(b.path));
			return folders.slice(0, 10);
		}

		allFiles.forEach((file: TAbstractFile) => {
			if (file instanceof TFolder) {
				if (file.name === '.obsidian' || file.name.startsWith('.') || file.name === '__pycache__') {
					return;
				}
				if (file.path.toLowerCase().contains(lowerCaseInputStr)) {
					folders.push(file);
				}
			}
		});
		folders.sort((a, b) => a.path.localeCompare(b.path));
		return folders;
	}

	renderSuggestion(item: TFolder, el: HTMLElement): void {
		el.setText(item.path);
	}

	selectSuggestion(item: TFolder): void {
		this.inputEl.value = item.path;
		this.inputEl.trigger('input');
		this.close();
	}
}

export class FileSuggest extends AbstractInputSuggest<TFile> {
	constructor(app: App, private inputEl: HTMLInputElement) { // Type changed to HTMLInputElement
		super(app, inputEl);
	}

	getSuggestions(inputStr: string): TFile[] {
		const lowerCaseInputStr = inputStr.toLowerCase();
		const allFiles = this.app.vault.getMarkdownFiles();
		const files: TFile[] = [];

		if (!inputStr.trim()) {
			return allFiles
				.sort((a, b) => b.stat.mtime - a.stat.mtime)
				.slice(0, 10);
		}

		allFiles.forEach((file: TFile) => {
			if (file.path.toLowerCase().contains(lowerCaseInputStr)) {
				files.push(file);
			}
		});
		files.sort((a, b) => a.path.localeCompare(b.path));
		return files;
	}

	renderSuggestion(item: TFile, el: HTMLElement): void {
		el.setText(item.path);
	}

	selectSuggestion(item: TFile): void {
		this.inputEl.value = item.path;
		this.inputEl.trigger('input');
		this.close();
	}
}
