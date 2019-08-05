# 👋 Hallo!

This is a complementary library to make integration and communication between Learnup mobile apps and explorable content seamless.

If you don't know what Learnup or an explorable is, it probably means that you got here by chance and have no idea what is going on.
Feel free to checkout [learnup.io](https://learnup.io), and if you are interested in creating explorable content together,
open an issue, or [drop us an email](mailto://hello@learnup.io).

## A Humble Guideline

In this section we are going to explore common terminology and bigger picture.

### Explorables

In Learnup, we try to share what we know and enable other sharers to find more interactive ways to present their content.

So far, we have found that sharing and learning anything is better done in a **conversational** fashion,
and we build up our **dialogues**(content) as chat-like experiences.

However this provides us a good foundation, we always want to explore the ways to make our dialogues more interactive.
In the end, learning is more fun, enjoyable, and immersive when it is more interactive, isn't it?

This is where **explorables** come in. We want to provide a good foundation for creators to develop their interactive explorables
and be able to integrate those within the natural flow of dialogues.

Right now, we support two kinds of **explorable entries** in our dialogues:


#### Mini Explorable

It is shown as a part of dialogue flow just like text or gif entries, and should be designed as an embedded box with **dimensions of at most (300x300) px**.

#### Fullscreen Explorable

It is shown in its own fullscreen view, with one exception: native back button. (Position and Dimension is TBA.)


### Scenes

Scenes provide a way to separate explorable content in parts. You can design your explorable in one scene or multiple scenes; it is all up to you.

We only care that each scene has a unique name, so that, when we load your explorable and pass it to your load callback, you'll know which scene to show on your side.


As dialogue flows, you can stage different views and interactions as scenes.
In that way, we can have opportunity to build up experience in steps, and provide extra rich content to make our point before the next scene.


### State Management

Throughout scenes, having capability of sharing state helps to build up experience for sure.

For example; if you ask user how much plastic bottles does she consume per week in first scene,
then show her impact on the environment in the next one, you'll need to store `bottlesConsumedPerWeek` in some kind of persistent state.

Initially, we had that required state management in-house, and exposed an api point.
Later, we decided to give full freedom to content creators, which includes their way of state management.

Since we open scenes in different web views for mobile apps, any in-browser storage option may fail.
You can use [firebase](https://firebase.google.com/) or any custom server you would build for persistent state management purposes.

For identification and tracking purposes, we provide `enrolmentId` to the `onload` callback.
**Enrolment** is the unique relationship between a **Dialogue** and a **User** on our side, which means you can trust it.

If you think that you require persistent state and handling it is so much for you, tell us about it.
We can also provide you an endpoint for that purpose.

## Getting Started

*TBA*
