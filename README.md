# mozilla-identity-open-design-challenge

## Work in progress - for my PhD / Thesis.

This repository contains the Data that I collected from Mozilla's Open Design public communication channels ([medium/blog](https://blog.mozilla.org/opendesign/), [github](https://github.com/mozilla/OpenDesign), [discourse](https://discourse.mozilla.org/), [Telegram](https://t.me/opendesign), etherpad, gDocs, among others platforms) during their [Identity & Brand Design Challenge](https://github.com/mozilla/OpenDesign/issues/39) (Feb-March 2016 ~ beginning 2017).

I focused on collecting data (name of the person, date, content of the message, source) of the interactions (chats/posts/discussions) that focused on the Identity & Brand Design Challenge.

This repository contains a simple node project that gets started through "npm start". The endpoint index.html loads the "ordered_all_mozilla.json" file and creates a very simple visualization using D3js.

I am still working on the visualization of the flow of interactions.

![Simple visualization of the interactions](/images/2018/10/visualization_interactions_mozilla_design_process.png)

#### File structure.

The folder '[/export](https://github.com/jmunox/mozilla-identity-open-design-challenge/tree/master/export)' contains the .json files with parsed data (either).
- The file "all_mozilla.json" contains all the collected data.
- The file "ordered_all_mozilla.json" contains all the collected data, ordered by date of the interaction.
- "mozilla_*.json" files contain per platform/communication channels
- the subfolder "files" and "files_backup" contain the raw data after being parsed, one file per endpoint, for example,  one file per medium post, discourse discussions, Telegram, etc.


#### Work done
I identified that several people that were involved in the process were present in different platforms, so I matched their names and normalized them, so that I can visualize them as the same person.

#### Work to be done.
- The dates of the comments in medium posts do not include hours and minutes, so I still want to process them and add a date/timestamp at least one minute later of the medium post, so that they appear after the main post that triggered the discussion.
- Experiment on the visualization of the interactions and connections between people, endpoints and the type of data that they share.
- I am thinking of conducting interviews to build something like story engine and ask the main people involved to reflect on the process with the help of the visualizations.
