// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: music;
let widget = createWidget();

Script.setWidget(widget);
Script.complete();

function createWidget() {
  
  let argsString = args.widgetParameter;
  
  let bgg = new LinearGradient();
  let l = new ListWidget();
  
  bgg.colors = [new Color("#FB5C74"), new Color("#FA233B")];
  bgg.locations = [0, 1];
  let files = FileManager.iCloud();
  
  let artwork = files.readImage(files.documentsDirectory() + "/" + argsString + ".png");
  
  let dictionaryString = files.readString(files.documentsDirectory() + "/" + argsString + ".json");
  let dictionary = JSON.parse(dictionaryString);
  
  l.backgroundGradient = bgg;
  l.useDefaultPadding();
  
  let lArtwork = l.addImage(artwork)
  lArtwork.cornerRadius = 8;
  
  if (dictionary.title != "") {
    l.addSpacer(5);
    let lTitle = l.addText(dictionary.title);
    lTitle.font = Font.mediumSystemFont(14);
    lTitle.lineLimit = 1;
  }
  
  if (dictionary.artist != "") {
    if (dictionary.title == "") {
      l.addSpacer(5);
    }
    let lArtist = l.addText(dictionary.artist);
    lArtist.font = Font.lightSystemFont(15);
    lArtist.textColor = new Color("#F4BBD5");
    lArtist.lineLimit = 1;
  }

  l.url = dictionary.url;
  
  return l;
  
}