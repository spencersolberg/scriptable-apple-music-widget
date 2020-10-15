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
  
  l.backgroundGradient = bgg;
  l.useDefaultPadding();
  
  let files = FileManager.iCloud();
  
  let artworkPath = files.documentsDirectory() + "/" + argsString + ".png"
  
  let artworkPromise = files.downloadFileFromiCloud(artworkPath);
  
  artworkPromise.then(function () {
    var artwork = files.readImage(artworkPath);
    
    var lArtwork = l.addImage(artwork);
    lArtwork.cornerRadius = 8;
  });
  
  let dictionaryPath = files.documentsDirectory() + "/" + argsString + ".json";
  
  let dictionaryPromise = files.downloadFileFromiCloud(dictionaryPath);
  
  dictionaryPromise.then(function () {
    var dictionary = JSON.parse(files.readString(dictionaryPath));
  
    if (dictionary.title != "") {
      l.addSpacer(5);
      var lTitle = l.addText(dictionary.title);
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
  });
    
  return l;
  
}
