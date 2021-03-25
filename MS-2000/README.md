Max4Live.com Link: 
https://maxforlive.com/library/device/900/korg-ms-2000

Here is the second version of the Korg MS-2000 Hardware Control device.

I've implemented inbound NRPNs, multislider instead of knobs for modseq1-3 supplemented by live number boxes with sane defaults. I've hardwired SEQ1 to pitch (this is how it is at the factory and I can't think of a reason why I wouldn't want to use pitch for SEQ1 if you can feel free to fork it for whatever you like). I've modified the selectors when choosing OSC1 wave to hide/show the DWGS waveform picker and I've linked picking a wave from that menu to adjust the knob (though I couldn't do it from knob to menu without some problems). I added tab support for the mod seq section (this is much more elegant IMO!).

Next up will be a skinned GUI and a smaller "macro window" with an open button to open the full GUI, etc.

This is a lot fun!!!

The inbound NRPNs aren't perfect, but they are good enough. This let's the actual MS-2000 device control every aspect of the patch.

I've saved the patch frozen, and it includes all the assets in the frozen patch in my testing. (no zip file this time) though I will be making some presets and bundling those together in a zip file to distribute after the GUI is done :)

Hope you like it! Thanks for the help and encouragement.

----8<----

Here is a first version of a Korg MS-2000 Hardware Control device. I will learn bpatcher and windowing eventually and make a better UI, but for now this works. I cannot figure out how to receive NRPNs in an elegant way from the MS-2000, but sending them TO the MS-2000 works. All CC's and NRPNs are supported, and additionally where applicable ctlins for the MS-2000 default CC messages are hardwired using the factory CC default CC#s. This creates a more symbiotic relationship between Live and the MS-2000 because changing something on the MS-2000 (any knob or button on it's surface that sends a CC will update the M4L MIDI Device). I wish I could do sysex somehow, but don't know how. Eventually I'll clean this up and put the modules in subpatchers.

So this is based on my work done for the microKORG. Most of the work was reusable (thanks Korg). I've removed the program select and added a comprehensive Mod Seq including an initialize and randomize per ModSeq (1-3) and initialize and randomize all buttons which work for all ModSeqs at once. I added the functionality where Control 1 and Control 2 knob labels on OSC1 change based on the waveform selected. I also added a DWGS waveform picker.

Some improvements I'd like to make:
- Figure out how to make the DWGS waveform picker only show itself if DWGS is chosen for OSC1 waveform.
- Clean up and encapsualte modules into subpatchers
- Create a mini view that sits in the rack, then a button to open a big beautiful skinned display :)
- Modify the ModSeq value controls from knobs to a nice bipolar bar graph.
- Integrate MS-2000 sending NRPNs to change the M4L Device control values (to enhance the symbiotic relationship)

*NOTE* To install, unzip the file into your Live Library/Presets/MIDI Effects/Max MIDI Effect directory. There is a js file dependency (included in the zip file) that must be installed in the same place as the axmd file.
