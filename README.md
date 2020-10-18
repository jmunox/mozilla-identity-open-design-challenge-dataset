# mozilla-identity-open-design-challenge

## Work in progress - for my PhD / Thesis.

This repository contains the Data that I collected from Mozilla's Open Design public communication channels ([blog post](https://blog.mozilla.org/opendesign/), [github](https://github.com/mozilla/OpenDesign), [discourse](https://discourse.mozilla.org/), [Telegram](https://t.me/opendesign), etherpad, gDocs, among others platforms) during their [Identity & Brand Design Challenge](https://github.com/mozilla/OpenDesign/issues/39) (Feb-March 2016 ~ beginning 2017).

I collected data (name of the person, date, content of the message, source) of the interactions (chats/posts/discussions) that focused on the Identity & Brand Design Challenge.

I am still working on the visualization of the flow of interactions.

#### File structure.

The folder '[/dist](https://github.com/jmunox/mozilla-identity-open-design-challenge/tree/master/dist)' contains the .json file with parsed data.
- The file "ordered_all_mozilla.json" contains all the collected data, ordered by date of the interaction.
- The folder "files" contains the files that were shared via Telegram shared files and that can only be accessed through the Telegram client.

The folder '[/data-extraction](https://github.com/jmunox/mozilla-identity-open-design-challenge/tree/master/data-extraction)' contains all the process for collecting and structuring all the data.
- The subfolders per step that transformed the data. Resulting in a set of files per platform/communication channels (Telegram, Blog post, Discourse, Vidyo/etherpad, GitHub)
- the subfolder "result_parsing" and "result_parsing_backup" contain the raw data after being parsed; one file per endpoint, for example:  one file per blog post, discourse discussions, Telegram, etc.
- The folder "04-visualizing" contains a simple endpoint index.html that loads the "ordered_all_mozilla.json" file and creates a very simple visualization using D3js.

#### Work done

- I identified that several people that were involved in the process were present in different platforms (eg. Telegram, GitHub, Discourse), so I matched their names to visualize them as the same person.
- All dates of the data include hours, minutes, and seconds when possible. For Telegram data, some messages happened at the same time (same minute, same second), so I manually changed the value of the milliseconds to maintain the order as originally displayed in Telegram.


#### Work to be done.

- Experiment with the visualization of the interactions and connections between people, endpoints and the type of data that they share.
- I am thinking of conducting interviews to build something like story engine and ask the main people involved to reflect on the process with the help of the visualizations.

### Visualization:

Example of a simple visualization: ![Simple visualization of the interactions](https://github.com/jmunox/mozilla-identity-open-design-challenge/tree/master/data-extraction/04-visualizing/visualization_interactions_mozilla_design_process.png)
