import { commands } from 'vscode'
import { Commands } from '../core/Commands'
import { ExtensionModule } from '../modules'
import { TranslateKeys, OpenKey, CopyKey, RenameKey, DeleteKey, NewKey, FulfillKeys, DuplicateKey, EditKey, markKeyInUse } from './manipulations'

const m: ExtensionModule = () => {
  return [
    commands.registerCommand(Commands.copy_key, CopyKey),
    commands.registerCommand(Commands.translate_key, TranslateKeys),
    commands.registerCommand(Commands.open_key, OpenKey),
    commands.registerCommand(Commands.rename_key, RenameKey),
    commands.registerCommand(Commands.edit_key, EditKey),
    commands.registerCommand(Commands.delete_key, DeleteKey),
    commands.registerCommand(Commands.fulfill_keys, FulfillKeys),
    commands.registerCommand(Commands.new_key, NewKey),
    commands.registerCommand(Commands.duplicate_key, DuplicateKey),
    commands.registerCommand(Commands.mark_key_as_in_use, markKeyInUse),
  ]
}

export default m
