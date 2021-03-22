---
title: Millions of New "Short Form" Case Names Now on CourtListener
date: "2016-01-30 18:00:00
"author: Michael Lissner
tags: Announcements, API, Bulk Data, CourtListener, Data Wrangling, Juriscraper
---

While working on a soon-to-be-released feature of CourtListener, we needed to create "short form" case names for all the cases that we could. We're happy to share that we've created about 1.8M short form case names, including complete coverage for all Supreme Court cases going back to 1947, when the [Supreme Court
Database](http://scdb.wustl.edu/) begins.

If you're not familiar with the term, short form case names are the ones you might use in a later citation to an authority you've already discussed in a document. For example, the first time you mention a case you might say:

> Kellogg Brown & Root Services, Inc. v. United States Ex Rel. Carter

But later references might just be:

> Kellogg Brown at 22

The Blue Book doesn't have a lot to say about this format, but does say the short form must make it, "clear to the reader...what is being referenced." Also:

> When using only one party name in a short form citation, use the name
> of the first party, unless that party is a geographical or
> governmental unit or other common litigant.

With these rules in mind, we made an algorithm that attempts to generate good short form case names, spitting out hard cases for human review. The final version of the algorithm was able to create about 1.8M short form case names out of the 3M cases in our system, and is run every day as we collect new opinions.

About 2,500 Supreme Court cases were too complicated for the algorithm. For these cases, we created short form case names by hand. We also know that the program is not perfect, so if you see any errors, as always, feel free to send them to us for correction.

All of these short form case names are now available in our new database, bulk API, and REST API in the field called `case_name_short`. To get a feel for these, you can also look at [the attached spreadsheet]({static}/csv/short_names.csv), which shows the cases that were completed by hand.

As for the algorithm itself, the process was roughly:

1.  Build a list of words that can't be used as a short form case name,
    including past Attorneys General, countries, states, popular cities
    (those with more than 150,000 people), common government acronyms,
    and a few common party names ("The State", "Smith", "The People").
1.  Identify "In Re" and "Matter of" cases, and do special handling for
    those.
1.  Similarly, set aside any case that has more than one "v." in it's
    name.
1.  Check for plaintiffs or defendants that are a single word. If
    they're not in the list made in step one (i.e., they're not a state,
    city, Attorney General, etc.), use that as the short form case name.

There are a few more subtleties you can find  [in our Github
repository](https://github.com/freelawproject/juriscraper/blob/master/lib/string_utils.py#L435-L522), but the basic premise, while imperfect, worked extremely well. When this was combined with a human editor to handle hard cases, we were able to achieve both good quality and decent coverage. In the end, we edited about 2500 Supreme Court cases by hand, and we are pleased to release the results for everybody to use.onation to support our work][donate]. As always, if you have any ideas for making it better please let us know!


[1]: {filename}/brand-new-courtlistener-a-year-in-the-works.md
[roe]: https://www.courtlistener.com/opinion/108713/roe-v-wade/
[picker]: {filename}/our-new-jurisdiction-picker.md
[rt]: {filename}/courtlistener-will-now-send-alerts-in-real-time.md
[feeds]: https://www.courtlistener.com/feeds/
[donate]: {filename}/pages/donate.md
[pp]: https://courtlistener.com/opinion/112786/planned-parenthood-of-southeastern-pa-v-casey/tation_id`, which contains the id of the old `Citation` objects.

The second big change is splitting `Document`s into `OpinionCluster`s and `Opinion`s. The way to think about this is that `Opinion` objects have the information that applies specifically to a dissent, concurrence, etc., such as the text of an opinion, the author or the judges that joined in the opinion. In general, it's a pretty simple object. `OpinionCluster` objects contain all the information that applies to the entire opinion like the date filed, any citations from West, Lexis or elsewhere, and pretty much everything else. As mentioned in [the announcement post][ann], this will make the API much more powerful.

Aside from these two major changes, the other changes are an overarching normalization of field names, the addition of judge endpoints, which we'll be announcing in more detail soon, and an expansion in the power of API filters.

In general, we think this upgrade to the API is going to really be powerful and we're really excited to be offering it. We'd love to support all versions of every API forever, but hopefully the deprecation policy will be long enough to upgrade your deployments.

If you have questions or ideas about any version of the API or if you need help with your upgrade, please [get in touch][contact].

[api]: https://www.courtlistener.com/api/rest/v3/
[u]: https://github.com/freelawproject/courtlistener/issues/331
[cs]: {filename}/citation-searching.md
[docs]: https://www.courtlistener.com/api/rest-info/
[ann]: {filename}/brand-new-courtlistener-a-year-in-the-works.md
[contact]: {filename}/pages/contact.md
[pie]: https://django-tastypie.readthedocs.org/en/latest/
[drf]: http://www.django-rest-framework.org/