---
title: "RECAP Project -- Why It Matters"
date: "2009-06-19 21:49"
status: "published"
---

> The right of access to criminal trials in particular is properly
> afforded protection by the First Amendment both because such trials
> have historically been open to the press and public and because such
> right of access plays a particularly significant role in the
> functioning of the judicial process and the government as a whole.

*Globe Newspaper Co. v. Superior Ct., 457 U.S. 596*

We are a nation of laws. Our law is created not only via legislation,
but also through the adjudicative process of the courts. Whereas we
generally have open and free access to the statutes that bind us, case
law has had a more mixed history. [Earlier
experiments](http://en.wikipedia.org/wiki/Star_Chamber) in secret
proceedings did not go well. Western law subsequently developed [strong
precedents](http://www.oyez.org/cases/1970-1979/1979/1979_79_243) for
access to judicial proceedings -- citing the importance of transparency
in promoting court legitimacy, accountability, fairness, and democratic
due process. When the law is accessible, "ignorance of the law is no
excuse"

Legal accessibility has traditionally meant that citizens may review the
law via the contemporary technology, and redistribute it at will. In
ancient courts, this implied open public access to the proceeding
itself. Indeed, the principle was literally built into the architecture
of the courthouses. As American law matured, it incorporated a right to
read and reproduce the text of decisions without paying a license fee.
The Copyright Act specifically exempts all government works from
monopoly protection because such works essentially "belong" to the
people. In the internet age, what constitutes a public right to court
records?

> \[I\]t would be an odd result indeed were we to declare that our
> courtrooms must be open, but that transcripts of the proceedings
> occurring there may be closed, for what exists of the right of access
> if it extends only to those who can squeeze through the door?

*United States v. Antar, 38 F.3d 1348*

Internet natives expect the government to be accessible online. The US
Courts were remarkably prescient in this regard, implementing electronic
access to case information as early as the 1980s. However, this access
came at a price. In order to fund electronic access to court records,
the judiciary decided to charge user fees for every minute of dial-up
access. As the web matured, the courts transitioned to the new platform
and perpetuated a fee-based model. The motivation was understandable:
new services cost money. However, some people began to argue that the
price for this model included not only transaction costs for users, but
also decreased legitimacy, accountability, fairness, and democratic due
process at the heart of of the open access doctrine.

The fee-supported structure of PACER has been allowed by Congress, most
recently in the 2002 E-Government Act. The courts use the fees they
collect from PACER users to maintain and upgrade the PACER system, but
also for for other purposes. The E-Government Act also made clear that
the courts should be moving toward free public access to court records.
Indeed, in February 2009 Senator Joe Lieberman (I-CT) [wrote a
letter](http://managingmiracles.blogspot.com/2009/03/lieberman-letter-on-crs-reports.html)
to the judiciary encouraging the courts to expand free public access to
court records, and [followed
up](http://managingmiracles.blogspot.com/2010/03/e-government-oversight-committee-writes.html)
in March 2010 indicating that spending on non-PACER expenses may work
against the Act's mandate.

> The Committee intends to encourage the Judicial Conference to move
> from a fee structure in which electronic docketing systems are
> supported primarily by user fees to a fee structure in which this
> information is freely available to the greatest extent possible.

*Congress, E-Government Act of 2002*

We created RECAP in hopes of hastening the day when court records would
be freely available to the general public via the Internet. RECAP
contributes to this goal in three important ways. Most obviously, we are
directly increasing public access to legal documents by creating a free
repository that anyone can access. Second, by donating bandwidth and CPU
cycles to the cause of public access, we are reducing the load on the
PACER servers and making it feasible for the courts to make more
documents freely available with the computing resources they already
have. Finally, we think that building and running RECAP will give us the
opportunity to study the practical challenges involved in large-scale
open access to public documents. We hope to learn lessons that will help
the judiciary improve its own systems. And we hope our efforts will
inspire the Administrative Office of the Courts to accelerate its own
movement toward an open access regime.

There are others working on these issues as well. See, for instance:

-   Carl Malamud has published millions of documents and privacy audits
    on [public.resource.org](http://public.resource.org/uscourts.gov/)
-   Erika Wayne, Law Librarian at Stanford, is mobilizing people through
    her [Improve Pacer
    petition](http://www.thepetitionsite.com/1/improve-PACER)
-   Senator Lieberman has [asked some pointed
    questions](http://hsgac.senate.gov/public/_files/022709courttransparency.pdf)
    about judicial compliance with the E-Government Act of 2002
-   Alan Sugarman has [detailed the many
    ways](http://www.hyperlaw.com/index.html) in which PACER "free"
    opinions are inadequate
-   [Justia](http://cases.justia.com/federal/district-courts/) posts
    many dockets, along with PACER documents
-   Many academics have created smaller litigation clearinghouses with
    PACER documents related to [civil
    rights](http://clearinghouse.wustl.edu/), [citizen
    media](http://www.citmedialaw.org/database), [intellectual
    property](http://lexmachina.stanford.edu/), and more.
-   The American Association of Law Libraries [advocates for no-fee
    access](http://aallwash.wordpress.com/2009/03/02/sen-lieberman-requests-answers-from-the-judicial-conference-on-compliance-with-court-provisions-of-the-e-government-act-of-2002/)
    to PACER
-   RECAP co-author Timothy B. Lee [wrote an
    article](http://arstechnica.com/tech-policy/news/2009/04/case-against-pacer.ars)
    about PACER and the prospects of reform for *Ars Technica* in April.t arbitrary number imaginable (although "54 lines" is about as bad). For reference, the text of this webpage is about twice that size and an MP3 is [about 800&times; as large][avg].

I decided to set aside issues number two and three, and focus on the first issue: If we know that a "page" is now defined as 4,320 bytes, what is the thing that is being divided into "pages"? Is it the webpage? The text of the webpage? Something else?
 
The answer:

<div class="left-image">
    <blockquote>
        <img src="{static}/images/pacer-page/two-files.png"
                 alt="Email from PACER stating there are two files generated or something."/>
    </blockquote>
</div>
<div class="clearfix"></div>

This is getting into the weeds, but it feels like what she's saying is:

1. We extract a lot of data from our database in an "original extraction file."

2. We measure this data and bill you for it.

3. We send you a subset of that data in the form of a docket.

Since at this point the AO still hadn't explained how a page was created, and since this opaque process was at the heart of the revenue model for PACER, I decided to send one more email asking about the technical details for generating the "original extraction file." Since we don't know  how these files are generated, it's possible that the AO could (accidentally or deliberately) tweak this method and thereby change PACER revenue.

When I asked about this, the next response I got was from the Senior Attorney for the Administrative Office of the Courts:

<div class="left-image">
    <blockquote>
        <img src="{static}/images/pacer-page/atty-response.png"
                 alt="Email from PACER Senior Attorney"/>
    </blockquote>
</div>
<div class="clearfix"></div>

This was a bit of a surprise, and I must confess that this is where the story goes cold. But we can learn a few things from these interactions. First, it's important to note that it took three answers before the AO could give me a vaguely correct answer to my basic question about pricing. The first two answers were flat wrong. 

Second, the AO has no interest in being fully transparent about how their pricing works. Yes, we now know that 4,320 bytes is a "page," but we still don't know: Bytes of *what*? What *is* an "original extraction file"? (This [isn't][goog] some kind of technical term.)
 
Third, we know that if you ask about this kind of thing persistently enough, you'll be routed to an attorney. At the time when I was researching this, I was shocked to hear from an attorney in response to a help desk question, but since then, it's come to make more sense. It turns out that towards the end of last year, there was a class action lawsuit filed against the AO alleging erroneous pricing for---you guessed it---generating dockets.[^1] While I won't opine on the merits of that case (and indeed I'm not a lawyer), it is possible that the AO had wind of that case and wanted to make sure they didn't make any legal missteps while emailing with me. The timeline isn't perfect---my inquiries were in November, and the case was filed in December---but if it wasn't related, it sure was prescient.

Going forward, we believe that the AO should consider a few changes:

1. The AO should share more details about how their pricing works both internally, so their staff have the correct answers, and externally, so that the answers are easy to find by the public, not buried in a 28 page manual. Indeed, in their billing it could  say how much *data* you purchased in a month instead of how many *pages*.

2. The AO should provide transparency about how "pages" are defined. We know that they're 4,320 bytes, but we still don't know what an "original extraction file" is. Providing technical details on this would provide clarity to their pricing and would make the AO less able to make technical changes in efforts to raise revenue. Criticism like this post would be largely addressed.

3. The AO should refrain from having lawyers answer help desk questions.

We hope the AO will consider these changes, and that in the future their pricing will be more transparent.


[^1]: Among [other failings][wrong], PACER doesn't provide permalinks, so for the moment, I can't provide a link to this information. What I can do is tell you to go to [the PACER website for the Court of Federal Claims][2]. From there you can look up case number: `1:15-cv-01575-TCW`. 

    Beware: There will be opaque fees.


[b]: https://www.supremecourt.gov/publicinfo/year-end/2014year-endreport.pdf 
[2]: https://ecf.cofc.uscourts.gov/cgi-bin/ShowIndex.pl
[numbers]: http://business.camden.rutgers.edu/files/Schindler-Yalch-2006.pdf
[avg]: http://filecatalyst.com/todays-media-file-sizes-whats-average/
[wrong]: {filename}/what-is-the-pacer-problem.md
[billion]: {filename}/pacer-billion-documents.md
[goog]: https://www.google.com/search?q=%22original+extraction+file%22&ie=utf-8&oe=utf-8e ended — what if after a period of time such cases were freely available without logging in? Are there other ways the AO can reduce their risk profile by making content free?

We make these suggestions and are providing details about this vulnerability while recognizing two things. First, we are outsiders that are not privy to the internal workings of the AO or PACER/ECF. Second, we recognize that working within the government can be difficult and that the AO has challenging constraints that it must overcome when addressing issues like this one or making changes like those listed above.

We hope that this vulnerability and the discussion of it will encourage the AO to change their approach to security. PACER/ECF is a website used by millions of people who deserve to have a safe environment to do their work. The nature and severity of this bug indicates that the AO likely does not have a culture that properly prioritizes security, or that if they do, their current approach to security is not working. To the extent the concrete steps we have listed above can be implemented by the AO, they would help the AO to provide a secure system and to move towards a security-oriented culture. 

We hope they do.



[user-stats]: {filename}/pages/pacer-facts.md#what-do-we-know-about-pacer%C2%A0users
[owasp-csrf]: https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
[owasp]: https://www.owasp.org/
[owasp-top-10]: https://github.com/OWASP/Top10/raw/master/2017/OWASP%20Top%2010%20-%202017%20RC1-English.pdf
[poc]: {filename}/pages/pacer-vulnerability-poc.md
[vuln]: {filename}/pacer-is-vulnerable.md
[revenue]: {filename}/pacer-revenue.md
[bb-p]: https://www.defense.gov/News/News-Releases/News-Release-View/Article/802929/defense-secretary-ash-carter-releases-hack-the-pentagon-results
[bb-a]: https://www.army.mil/article/178473/army_secretary_issues_challenge_with_hack_the_army_program
[bb-gsa]: https://18f.gsa.gov/2017/05/11/the-next-steps-towards-bug-bounty-program-for-technology-transformation-service/
[chron]: {filename}/pacer-fee-history.md
[cand]: https://www.ssllabs.com/ssltest/analyze.html?d=ecf.cand.uscourts.gov
[doj]: https://www.justice.gov/criminal-ccips/page/file/983996/download
[timeline]: {filename}/pages/pacer-vulnerability-poc.md#timeline04-09.pdf">September, 2004</a>.</p>
</div>
<div class="clearfix"></div>


**March, 2006** -- New fees for paper reproductions and bounced checks. Search fees performed by PACER staff are now $26, up from $20.

<div class="left-image">
    <a href="{static}/pdf/judicial-conference-proceedings/2006-03.pdf">
        <img src="{static}/images/pacer-fee-history/2006-03.png"
             alt="Screenshot of PACER fee changes"
             class="img-responsive border">
    </a>
    <p class="caption"><strong>Source:</strong> Proceedings of the Judicial Conference, <a href="{static}/pdf/judicial-conference-proceedings/2006-03.pdf">March, 2006</a>.</p>
</div>
<div class="clearfix"></div>


**September, 2006** -- Those with fee waivers can no longer redistribute documents at no cost.

<div class="left-image">
    <a href="{static}/pdf/judicial-conference-proceedings/2006-09.pdf">
        <img src="{static}/images/pacer-fee-history/2006-09.png"
             alt="Screenshot of PACER fee changes"
             class="img-responsive border">
    </a>
    <p class="caption"><strong>Source:</strong> Proceedings of the Judicial Conference, <a href="{static}/pdf/judicial-conference-proceedings/2006-09.pdf">March, 2006</a>.</p>
</div>
<div class="clearfix"></div>


**September, 2007** -- A pilot project at 15 GPO depository libraries is launched providing free public access to court records in PACER. *Pro bono* attorneys are now considered "among those individuals who may...be exempted from EPA fees."

<div class="left-image">
    <a href="{static}/pdf/judicial-conference-proceedings/2007-09.pdf">
        <img src="{static}/images/pacer-fee-history/2007-09 pg1.png"
             alt="Screenshot of PACER fee changes"
             class="img-responsive border">
    </a>
    <a href="{static}/pdf/judicial-conference-proceedings/2007-09.pdf">
        <img src="{static}/images/pacer-fee-history/2007-09 pg2.png"
             alt="Screenshot of PACER fee changes"
             class="img-responsive border">
    </a>
    <p class="caption"><strong>Source:</strong> Proceedings of the Judicial Conference, <a href="{static}/pdf/judicial-conference-proceedings/2007-09.pdf">September, 2007</a>.</p>
</div>
<div class="clearfix"></div>

**March, 2008** -- The fee schedule is amended to remove dial-up fees, "because of expanded accessibility through the internet."

<div class="left-image">
    <a href="{static}/pdf/judicial-conference-proceedings/2008-03.pdf">
        <img src="{static}/images/pacer-fee-history/2008-03.png"
             alt="Screenshot of PACER fee changes"
             class="img-responsive border">
    </a>
    <p class="caption"><strong>Source:</strong> Proceedings of the Judicial Conference, <a href="{static}/pdf/judicial-conference-proceedings/2008-03.pdf">March, 2008</a>.</p>
</div>
<div class="clearfix"></div>


**March, 2010** -- The $10/year fee exemption is amended to allow $10/quarter of fee exemptions.

<div class="left-image">
    <a href="{static}/pdf/judicial-conference-proceedings/2010-03.pdf">
        <img src="{static}/images/pacer-fee-history/2010-03.png"
             alt="Screenshot of PACER fee changes"
             class="img-responsive border">
    </a>
    <p class="caption"><strong>Source:</strong> Proceedings of the Judicial Conference, <a href="{static}/pdf/judicial-conference-proceedings/2010-03.pdf">March, 2010</a>.</p>
</div>
<div class="clearfix"></div>


**September, 2010** -- A new training program is launched including $50 of free quarterly usage for participating libraries.

<div class="left-image">
    <a href="{static}/pdf/judicial-conference-proceedings/2010-09.pdf">
        <img src="{static}/images/pacer-fee-history/2010-09.png"
             alt="Screenshot of PACER fee changes"
             class="img-responsive border">
    </a>
    <p class="caption"><strong>Source:</strong> Proceedings of the Judicial Conference, <a href="{static}/pdf/judicial-conference-proceedings/2010-09.pdf">September, 2010</a>.</p>
</div>
<div class="clearfix"></div>


**September, 2011** -- Current fees are introduced and they have not changed since. Per page fees are increased from 8¢ to 10¢. Quarterly waivers are raised from $10 to $15. These fee increases do not apply for three years to "local, state, and federal and government entities."
 
<div class="left-image">
    <a href="{static}/pdf/judicial-conference-proceedings/2011-09.pdf">
        <img src="{static}/images/pacer-fee-history/2011-09.png"
             alt="Screenshot of PACER fee changes"
             class="img-responsive border">
    </a>
    <p class="caption"><strong>Source:</strong> Proceedings of the Judicial Conference, <a href="{static}/pdf/judicial-conference-proceedings/2011-09.pdf">September, 2011</a>.</p>
</div>
<div class="clearfix"></div>


**September, 2019** -- The free tier [is doubled from $15/quarter to $30/quarter][201909announce]. 
<div class="left-image">
    <a href="{static}/pdf/judicial-conference-proceedings/2019-09.pdf">
        <img src="{static}/images/pacer-fee-history/2019-09.png"
             alt="Screenshot of PACER fee changes"
             class="img-responsive border">
    </a>
    <p class="caption"><strong>Source:</strong> Proceedings of the Judicial Conference, September, 2019.</p>
</div>

[c]: {filename}/pages/contact.md
[jc]: http://www.uscourts.gov/about-federal-courts/governance-judicial-conference
[pro]: http://www.uscourts.gov/about-federal-courts/reports-proceedings-judicial-conference-us
[201909announce]: https://www.uscourts.gov/news/2019/09/17/judiciary-adopts-new-model-edr-plan-doubles-fee-waiver-pacer