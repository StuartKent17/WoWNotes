# Wownotes

Just playing around trying to get some neat generated patch notes. 

Patch content is sourced from [WowGamepedia](https://wow.gamepedia.com). Their license is CC by SA. 

Additional content has been sourced from [Wowhead](https://wowhead.com) and the leaks found online on reddit, and [MMO-Champion](https://MMO-Champion.com).

Attribution for items sourced from news websites, or a single attributable source for 'expansion leaks' will include a link in the HTML source file as a comment. Additional links can be added on request or content can be removed from this repository.

While no claim is placed on any content, generated or otherwise, original licenses and copyright from the original rights holders still apply. Please contact any and all that you believe may have contributed to any output you plan to use or distribute for a commercial endeavour.


# Generated Text 

## Third Update
I've made some progress and started posting it about places. This was generated with a "Patch 8.2.5 Will Contain\n" prompt and was trained for 2000 steps on the 355m model. I've just added a bunch of new training files for use. In the output folder. These are now all regenerated at the same time, and allow for rapid updating of subsets of the data. Next update will be using some combination of these for expansion speculation. 

There's now an archive of the april fools patch notes, and the expansion leak/rumor patch notes. I'm hoping a combination of these will have some good results. 

The manually_generated folder has a bunch of generated text. Most of it has been read now, and turned into the below. But it's inevitable some stuff has been missed as there's a lot to process. 

Here's what's been posted so far. 
 * [First Generation](https://www.reddit.com/r/wow/comments/d5sfcf/ai_generated_patch_notes_early_version_very_rough/)
 * [I asked my robot about 8.2.5](https://www.reddit.com/r/wow/comments/d778cm/i_asked_my_robot_about_patch_825_generated_patch/)
 * [Botpatch Twitter](https://twitter.com/BotPatch) 4x A day tweets of random stuff I found funny


## Second Attempt

This is from the combined 7.X and 8.X patch notes. 1000 steps at .00001.

[Checkpoint](https://drive.google.com/file/d/1oq0DqQ2-JTGDL3NLsYPyIByVlQCgjTe8/view?usp=sharing)

### SOCIAL AND QUEST DEPENDENCIES
Some of the deaths of other guild members can no longer be forgiven. The guilds who were killed in the previous week's fight are no longer able to be wronged.
The ring level requirement in Kul Tiras, Nazjatar, Shorot remains the same.
- The items level requirement in Zandalar, Darkshore, and Zandalar are unchanged.
- Players will be able to begin the quest "I Know" by either combat raiding with their Alliance and Player companions or by starting their quest group with their favorite new-age wasteland cast. Once they begin fighting, they'll be buffed in such a way that they will begin to glow, and then stop.

### HATI QUEST
Players who have completed The Wind Waker now additionally attempts to get out of the Azerite eternal slavery wave, by fleeing the area, and then returning to their original capital.

#

## first attempt 
[Checkpoint](https://drive.google.com/file/d/1-29OaNFlH15QLkAQ9bky07g9CjvmeU8N/view?usp=sharing)

This was a model trained off three pages of unformatted text. 

**Paladin**


Holy

* Blessing of Sacrifice is no longer consumed by Holy Priests.

* Blessing of Sacrifice damage increased by 400%.

Kaldorei

* Koran Orb now requires the Blessing of Sacrifice to be active.

* Blessing of Sacrifice has been redesigned. The ability forms an Orb of Fasting around a Binder's shoulder, increasing the duration of Blessing ofasting by 0.5 second.

* Glyph of Fasting now heals up to four friendly targets with your Atonement active (was all nearby friendly targets).


# Project Setup

I wanted to have a bunch of different options of dealing with the content, so trying HTML. HTML seems to jam it up, but I use Gulp/NodeJS to combine the files and strip the HTML, which instead could convert to markdown. It handles markdown lists ok, so might try later.

GPT2 is a text generation model created by OpenAI, which someone built an easy to use version called simple_gpt_2, to make things easier, google have an online programming tool called "Collab" which lets you easily use this massive stack of tools for 'research'.

If you want to try, open this notebook & save to your google drive. https://colab.research.google.com/drive/1VLG8e7YSEwypxU-noRNhsv5dW4NfTGce#scrollTo=puq4iC6vUAHc
