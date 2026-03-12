import { useState } from "react";

const templates = {
  task1: {
    label: "Task 1 — Writing an Email",
    time: "27 min · 150–200 words",
    scenarios: [
      {
        id: "formal-complaint",
        label: "Formal Complaint",
        tag: "FORMAL",
        context: "To a company, landlord, service provider, or institution about a problem or poor service.",
        opening: [
          "I am writing to bring to your attention a matter of considerable concern regarding [specific issue] that I have been experiencing since [date/timeframe].",
          "I am contacting you to formally address an issue I have encountered with [product/service/situation], which has significantly affected [my daily routine / my work / my household].",
          "I wish to express my dissatisfaction with the [service/product/condition] at [location/company], as the situation has not been resolved despite [my previous attempts / the time elapsed].",
        ],
        body: [
          "Specifically, [describe the problem in detail]. This has resulted in [describe the impact — inconvenience, financial loss, health concern, etc.]. To date, [explain what has or hasn't been done to address it].",
          "The core issue centres on [describe the problem]. Despite [any steps already taken], the situation has persisted, causing [describe the ongoing impact]. I have documented this matter on [date(s)] and am prepared to provide further evidence if required.",
        ],
        request: [
          "I would kindly request that [specific action — repair, refund, replacement, investigation] be arranged at the earliest possible convenience. I trust this matter will receive the prompt attention it warrants.",
          "I respectfully ask that you take immediate steps to [specific resolution]. Should this matter remain unresolved by [reasonable deadline], I may be compelled to seek further recourse.",
        ],
        closing: [
          "I appreciate your time and look forward to a timely and satisfactory resolution to this matter.",
          "Thank you for your attention to this concern. Please do not hesitate to contact me should you require any further information.",
        ],
        example: `Subject: Unresolved Heating Issue — Unit 304, Maplewood Heights

Dear Property Manager,

I am writing to bring to your attention a matter of considerable concern regarding the heating system in my apartment (Unit 304), which has been malfunctioning for the past ten days.

Despite adjusting the thermostat repeatedly, the unit remains uncomfortably cold, particularly during the early morning and evening hours. This situation is especially problematic as I work from home full-time and require a functional living environment to maintain my productivity and well-being. I contacted the maintenance line on [date]; however, no follow-up has been received.

I would respectfully request that a qualified technician be dispatched to inspect and repair the system at the earliest possible convenience. Should the issue remain unaddressed within the next five business days, I will be exploring further options available to me as a tenant.

I appreciate your prompt attention to this matter and look forward to your response.

Sincerely,
[Your Name]`,
      },
      {
        id: "formal-request",
        label: "Formal Request / Inquiry",
        tag: "FORMAL",
        context: "To a business, organization, or authority asking for information, assistance, or a specific action.",
        opening: [
          "I am writing to inquire about [topic/service/program] and to request [specific information or action] that would assist me in [purpose or goal].",
          "I am reaching out to request your assistance with [specific matter]. I am currently [brief context], and obtaining [the requested item/information] is an important next step in this process.",
          "I am contacting your office to formally request [specific action or document], as it is required for [official purpose, e.g., immigration, employment, enrollment].",
        ],
        body: [
          "Specifically, I am interested in [details of the request]. I would appreciate information regarding [aspect 1], [aspect 2], and [aspect 3], as these factors are directly relevant to my decision-making process.",
          "The reason for this request is [clear explanation of need]. At present, [brief background situation], and [the requested information or action] would enable me to [benefit or outcome].",
        ],
        request: [
          "I would be grateful if you could [specific action — provide, confirm, forward, arrange] at your earliest convenience. Please let me know if any additional documentation or information is required from my end.",
          "Should you require any supporting documents or further details, I am happy to provide them promptly. I look forward to your guidance on how best to proceed.",
        ],
        closing: [
          "Thank you sincerely for your time and assistance. I look forward to your response and any information you are able to provide.",
          "I greatly appreciate your support and am hopeful that you will be able to accommodate this request in a timely manner.",
        ],
        example: `Subject: Request for Information Regarding Community Garden Program

Dear Program Coordinator,

I am writing to inquire about the Community Garden Program and to request information regarding the application process for the upcoming growing season.

I recently relocated to the neighbourhood and am eager to participate in local green initiatives. Specifically, I would appreciate details regarding plot availability, associated fees, any applicable residency requirements, and the expected application timeline. This information would be extremely helpful as I plan my involvement in the coming months.

Please let me know if any supporting documents, such as proof of address, are required at the time of application. I am fully prepared to submit whatever is necessary to ensure a smooth process.

Thank you sincerely for your time. I look forward to hearing from you and hope to become an active member of the program.

Regards,
[Your Name]`,
      },
      {
        id: "formal-apology",
        label: "Formal Apology",
        tag: "FORMAL",
        context: "To a supervisor, colleague, organization, or client for a mistake, missed deadline, or oversight.",
        opening: [
          "I am writing to sincerely apologize for [specific issue — missing a deadline, an error, an absence], and to assure you that I take full responsibility for the oversight.",
          "I wish to express my sincerest apologies regarding [the incident/situation] that occurred on [date]. I understand the inconvenience and disruption this may have caused.",
          "I am reaching out to formally acknowledge and apologize for [specific error or omission]. I recognize that this fell short of the standard expected, and I am committed to ensuring it does not recur.",
        ],
        body: [
          "The situation arose due to [honest explanation — not an excuse, but a reason]. While I understand this does not excuse the outcome, I want to be transparent about the circumstances. I have since [steps already taken to remedy the situation].",
          "I fully recognize the impact this had on [the team/the client/the project/your time], and I regret that my actions contributed to [describe the negative consequence]. Going forward, I have [corrective action taken or planned] to prevent a recurrence.",
        ],
        request: [
          "I would welcome the opportunity to discuss how I can make amends and restore confidence moving forward. Please let me know how I can best support you at this time.",
          "If there is anything I can do to address the matter or minimize further impact, I am entirely at your disposal and prepared to act immediately.",
        ],
        closing: [
          "Once again, I sincerely apologize and appreciate your understanding. I am committed to maintaining a higher standard in our working relationship.",
          "I value our professional relationship greatly and am determined to rebuild your trust through consistent and reliable performance going forward.",
        ],
        example: `Subject: Apology for Late Submission — Project Status Report

Dear Ms. Thompson,

I am writing to sincerely apologize for submitting the project status report two days beyond the agreed deadline. I take full responsibility for this lapse and recognize the inconvenience it caused for your planning.

The delay arose due to an unexpected technical issue with our internal data system, which prevented me from accessing the necessary figures until late Thursday. While I understand this does not excuse the missed deadline, I want to be transparent about what occurred. I have since submitted the completed report and have also put in a request for backup data access to prevent similar issues in the future.

I fully appreciate the importance of timely reporting to the team's workflow and am committed to ensuring this does not happen again. If there is anything I can do to minimize any remaining impact, please do not hesitate to let me know.

Thank you for your understanding.

Sincerely,
[Your Name]`,
      },
      {
        id: "formal-suggestion",
        label: "Formal Suggestion / Recommendation",
        tag: "FORMAL",
        context: "To a manager, community organization, or institution proposing an improvement or new idea.",
        opening: [
          "I am writing to suggest a potential improvement to [existing program/policy/service] that I believe would greatly benefit [the community/our team/residents/customers].",
          "I would like to propose an idea that I believe warrants your consideration, particularly in light of [current issue, trend, or opportunity] affecting [relevant group or organization].",
          "I am reaching out to recommend a course of action that I am confident would address [existing challenge] and contribute positively to [goal or outcome].",
        ],
        body: [
          "Specifically, I propose that [clear description of suggestion]. This approach would not only [benefit 1], but would also [benefit 2]. A number of similar initiatives have been implemented successfully in [comparable context], demonstrating clear potential for positive outcomes.",
          "The primary advantage of this proposal lies in [main benefit]. Furthermore, [secondary benefit]. From a practical standpoint, implementation would require [brief overview of resources or steps], which appears both feasible and cost-effective given [relevant context].",
        ],
        request: [
          "I would greatly appreciate the opportunity to discuss this proposal further at your convenience. I am happy to provide additional details or a more comprehensive outline if that would be helpful.",
          "I encourage you to consider this suggestion and, if appropriate, share it with the relevant decision-makers. I am available to collaborate on the planning process should you wish to move forward.",
        ],
        closing: [
          "Thank you for taking the time to consider this recommendation. I look forward to your thoughts and any feedback you might have.",
          "I appreciate your openness to community input and am hopeful that this proposal may contribute meaningfully to [organization/neighbourhood/team].",
        ],
        example: `Subject: Suggestion for Extended Library Hours on Weekends

Dear Library Director,

I am writing to suggest an extension of library operating hours on weekends, a change I believe would meaningfully benefit a broad segment of our community.

Currently, the library closes at 3:00 p.m. on Saturdays and remains closed on Sundays. Many working residents and students find it challenging to access resources within this limited window. Extending Saturday hours to 6:00 p.m. and introducing a Sunday afternoon opening from 12:00 to 5:00 p.m. would significantly improve accessibility, particularly for families, job seekers, and individuals pursuing continuing education.

The financial investment would likely be modest, as many libraries in comparable municipalities have implemented similar adjustments through part-time staffing arrangements. I would be happy to share relevant examples or community survey data to support this proposal if that would assist in your deliberations.

Thank you for your consideration. I look forward to hearing your thoughts and hope this suggestion may be of value.

Respectfully,
[Your Name]`,
      },
      {
        id: "informal-complaint",
        label: "Informal Complaint",
        tag: "INFORMAL",
        context: "To a friend, neighbour, or colleague expressing frustration about a shared situation.",
        opening: [
          "I hope you're doing well. I wanted to reach out because something has been bothering me lately, and I think it's important that we address it together.",
          "Hi [Name], I've been meaning to get in touch about [issue] because it's been causing me some real frustration, and I'm hoping we can sort it out.",
          "Hey [Name], I hope this message finds you well. I wanted to bring something to your attention that I think we should talk about.",
        ],
        body: [
          "Here's what's been happening: [describe the issue]. It's been going on for [timeframe], and honestly, it's starting to affect [describe impact on daily life or your relationship]. I don't think this was intentional on your part, but I did want you to know how it's been landing on my end.",
          "The main issue is [describe problem clearly but warmly]. I've tried [any steps already taken], but things haven't really improved. I know we're both [shared context — neighbours, colleagues, etc.], and I'd really like for us to find a solution that works for both of us.",
        ],
        request: [
          "Would you be open to [suggested solution or compromise]? I think that could go a long way toward resolving things, and I'd really appreciate your willingness to work through this together.",
          "I was hoping we could [proposed action]. Even a small adjustment would make a big difference for me, and I'm happy to do my part as well.",
        ],
        closing: [
          "Thanks so much for hearing me out — I really do appreciate it. Looking forward to chatting soon.",
          "I appreciate your understanding, and I'm confident we can work this out. Let me know what you think!",
        ],
        example: `Hi Sarah,

I hope you're doing well! I've been meaning to reach out about something that's been on my mind lately, and I think it's best we address it directly.

Over the past few weeks, I've noticed that the shared hallway between our apartments has been a bit cluttered with items left outside your door. I completely understand that storage can be tight — I've had the same challenge myself — but it has been making it difficult to move through the space, especially when I'm carrying groceries or packages.

Would you be open to finding a shared solution? I was thinking we could each designate a small area near our respective doors, or perhaps look into whether the building offers any additional storage options. I'm happy to chat with the building manager together if that would help.

Thanks so much for hearing me out — I really appreciate it. I know this is a minor thing, and I'd love for us to resolve it quickly so there are no hard feelings.

Take care,
[Your Name]`,
      },
      {
        id: "informal-request",
        label: "Informal Request / Invitation",
        tag: "INFORMAL",
        context: "To a friend, family member, or colleague asking for a favour, help, or to invite them to something.",
        opening: [
          "Hi [Name], I hope things are going great on your end! I'm reaching out because I could really use your help with something, and you were the first person who came to mind.",
          "Hey [Name]! I know things have been busy lately, but I wanted to get in touch because I have a bit of a situation and thought you might be able to lend a hand.",
          "Hi [Name], I've been looking forward to catching up, and I also wanted to ask you something I think you'll find pretty exciting!",
        ],
        body: [
          "Here's what's going on: [describe the situation or reason for the request]. It would mean a lot to me if you could [specific ask], especially given [context — your experience, availability, relationship]. Of course, I completely understand if you're not able to, and there's absolutely no pressure.",
          "The reason I'm asking is [honest explanation]. I think you'd be great at this because [specific reason], and I know I can always count on you. It would only require [brief description of time or effort involved], and I'd be happy to [offer something in return — help in return, cover costs, etc.].",
        ],
        request: [
          "If you're available and willing, it would be amazing if you could [specific action] by [timeline if applicable]. Just let me know and we can figure out the details together.",
          "I'd love to hear your thoughts! Let me know if you're up for it or if you'd like more information before deciding.",
        ],
        closing: [
          "Thanks so much for considering it — I really appreciate everything you do. Hope to hear from you soon!",
          "Whatever you decide, I'm grateful to have you to reach out to. Let's catch up soon regardless!",
        ],
        example: `Hi Jamie,

I hope everything is going well with you! I wanted to reach out because I could really use your help with something, and honestly, you're the best person I know for this.

I'm in the process of setting up my new home office and I'm completely lost when it comes to arranging the furniture and making the most of the space. Since you have such a great eye for interior design and recently renovated your own workspace, I was hoping you might be willing to come by one weekend and share a few ideas. I'll cover lunch, of course!

There's absolutely no pressure — I know your schedule is busy — but even a quick visit or a few suggestions over video call would be incredibly helpful. I'm hoping to get things sorted before the end of the month, so any time in the next couple of weeks would be perfect.

Thanks so much for even considering it. Let me know what you think, and let's plan something either way!

Warmly,
[Your Name]`,
      },
      {
        id: "informal-apology",
        label: "Informal Apology / Update",
        tag: "INFORMAL",
        context: "To a friend, family member, or colleague for a personal mistake, missed plan, or long absence.",
        opening: [
          "Hi [Name], I hope you're well. I've been wanting to reach out for a while now, and I owe you a proper apology for [what happened].",
          "Hey [Name], I know it's been a while, and I'm sorry for that. I've been meaning to get in touch sooner, especially after [the incident/last time we spoke].",
          "Hi [Name], I wanted to take a moment to personally apologize for [specific situation]. I've been feeling terrible about it and wanted to reach out as soon as I could.",
        ],
        body: [
          "What happened was [honest, clear explanation without over-justifying]. I realize now that [impact on the other person], and that wasn't fair to you. I should have [what you should have done differently], and I genuinely regret that I didn't handle it better.",
          "I know [what happened] put you in a difficult position, and I really am sorry for that. Looking back, I wish I had [alternative action], but at the time [brief context]. That said, it wasn't an excuse, and I own the mistake completely.",
        ],
        request: [
          "I'd love to make it up to you if you're open to it. Maybe we could [suggestion — meet for coffee, catch up soon, etc.] when you have some time?",
          "I hope we can put this behind us and move forward — our [friendship/working relationship] means a great deal to me. Let me know when you'd be up for a chat.",
        ],
        closing: [
          "Again, I'm truly sorry, and I appreciate your patience and understanding more than you know.",
          "Thanks for taking the time to read this. I hope we can talk soon.",
        ],
        example: `Hi Marcus,

I wanted to reach out and sincerely apologize for missing your birthday gathering last weekend. I know you put a lot of effort into organizing it, and I feel genuinely terrible about not being there.

To be honest, I had a personal situation come up unexpectedly on Friday evening that required my full attention, and in the chaos of it all, I failed to let you know in time. That was careless of me, and you deserved better communication than that. I should have sent a message the moment I realized I couldn't make it.

I'd love to make it up to you — maybe we could get together for dinner sometime this week, my treat? I want to celebrate you properly and catch up in person.

Again, I'm really sorry, Marcus. Your friendship means a lot to me, and I hope you had a great time despite my absence. Looking forward to hearing from you.

Take care,
[Your Name]`,
      },
      {
        id: "informal-thanks",
        label: "Thank You / Appreciation",
        tag: "INFORMAL",
        context: "To a friend, colleague, or neighbour expressing gratitude for help, a gift, or support.",
        opening: [
          "Hi [Name], I just wanted to take a moment to properly thank you for [what they did]. It truly meant more to me than I can easily express.",
          "Hey [Name]! I've been meaning to reach out since [event/occasion] to say a heartfelt thank you for [specific gesture or action].",
          "Hi [Name], I hope you're doing well! I wanted to send a quick note to let you know how much I appreciated [what they did].",
        ],
        body: [
          "[What they did] made such a difference during [context — a stressful time, the move, the project, etc.]. Knowing that I had your support meant a great deal to me personally, and it absolutely helped me [positive outcome that resulted]. It's not something I take for granted.",
          "I was genuinely touched by [the gesture/their effort/their thoughtfulness]. It came at exactly the right moment, and it reminded me how fortunate I am to have someone like you in my corner. The [item/help/advice] has already [describe how it has been useful or appreciated].",
        ],
        request: [
          "I'd love to return the favour sometime soon — please never hesitate to reach out if there's anything I can do for you.",
          "I hope we can get together soon to celebrate [occasion or just catch up]! I'll be in touch to plan something.",
        ],
        closing: [
          "Thanks again — from the bottom of my heart. You're one of a kind!",
          "I'm so grateful to have you in my life. Speak soon!",
        ],
        example: `Hi Linda,

I've been meaning to send this message all week, and I didn't want another day to pass without properly thanking you for everything you did to help us settle into our new home.

From lending us your truck on moving day to showing up the following weekend with homemade food and extra cleaning supplies — your generosity was truly overwhelming. It came at an incredibly hectic time, and having your help and positive energy around made the whole transition feel so much more manageable. The first few days in a new place can feel isolating, but you made us feel genuinely welcomed in the neighbourhood.

Please know that I'm always here to return the favour in any way I can. I'd love to have you over for dinner once we've properly sorted out the kitchen — I insist!

Thank you again, Linda. We're so lucky to have you as a neighbour.

Warmly,
[Your Name]`,
      },
    ],
  },
  task2: {
    label: "Task 2 — Responding to a Survey",
    time: "26 min · 150–200 words",
    scenarios: [
      {
        id: "survey-opinion",
        label: "Opinion / Choose Between Two Options",
        tag: "OPINION",
        context: "You are given a survey with two choices. Select ONE and support it with 2–3 developed reasons.",
        structure: [
          {
            part: "Opening Statement",
            desc: "Clearly state your position. Do NOT say 'I think' or 'In my opinion' repeatedly — state it confidently once.",
            phrases: [
              "Having carefully considered both options, I firmly believe that [Option A/B] is the more beneficial choice for [reason].",
              "In my view, [Option A] represents a far more practical and impactful solution than [Option B], for several compelling reasons.",
              "I would strongly advocate for [Option A/B], as it addresses [core need] far more effectively than the alternative.",
              "Between the two options presented, [Option A] stands out as the clearly superior choice, particularly when considered from the perspective of [relevant angle].",
            ],
          },
          {
            part: "Reason 1 (Main Argument)",
            desc: "Your strongest, most developed reason. Use a clear topic sentence + explanation + specific example or implication.",
            phrases: [
              "First and foremost, [Option A] offers [specific advantage]. This is particularly significant because [elaboration]. For instance, [concrete example or scenario], which demonstrates that [logical conclusion].",
              "The most compelling argument in favour of [Option A] is [main reason]. When [specific context], [Option A] enables [positive outcome], whereas [Option B] would likely result in [drawback].",
              "To begin with, [Option A] directly addresses [core issue], something [Option B] fails to achieve. [Explanation of how and why]. This has clear and measurable implications for [affected group or outcome].",
            ],
          },
          {
            part: "Reason 2 (Supporting Argument)",
            desc: "A second distinct reason. Avoid repeating the first point — approach from a different angle.",
            phrases: [
              "Furthermore, [Option A] also provides [second benefit]. Unlike [Option B], which [limitation], [Option A] allows [positive outcome]. This is especially important for [specific group or context].",
              "Beyond this, [Option A] has the added advantage of [second reason]. Considering [relevant real-world factor], this benefit cannot be overlooked.",
              "Additionally, one must consider the long-term implications of choosing [Option A]. Over time, [explanation of long-term advantage], whereas [Option B] may [limitation or risk].",
            ],
          },
          {
            part: "Optional: Acknowledge the Other Side",
            desc: "Shows sophistication. Briefly acknowledge the merit of Option B before reinforcing your choice.",
            phrases: [
              "While [Option B] certainly has its merits — particularly in terms of [brief acknowledgement] — these advantages are outweighed by the broader benefits that [Option A] provides.",
              "Admittedly, [Option B] may appeal to those who prioritize [specific value]. However, when evaluated against [criteria], [Option A] consistently proves to be the more effective solution.",
            ],
          },
          {
            part: "Closing Statement",
            desc: "Restate your position confidently. Do not introduce new ideas.",
            phrases: [
              "For these reasons, I am firmly in support of [Option A]. It is the more [effective/practical/equitable/sustainable] approach and would deliver the greatest benefit to [community/individuals/the organization].",
              "In conclusion, [Option A] clearly represents the stronger choice. Its capacity to [key benefit] makes it the most logical and responsible option available.",
              "Taking all factors into account, [Option A] emerges as the most well-rounded solution — one that addresses both the immediate needs and the longer-term interests of those involved.",
            ],
          },
        ],
        example: `Survey Question: Your city is considering two new initiatives to improve quality of life. Which do you support?
Option A: Build a new public library.
Option B: Build a new sports complex.

Having carefully considered both options, I firmly believe that investing in a new public library is the more beneficial choice for our community as a whole.

First and foremost, a library provides universal access to educational resources, technology, and community programs that serve residents of all ages and income levels. Unlike a sports complex, which primarily benefits those who are physically active, a library creates opportunities for literacy development, job searching, and lifelong learning — needs that are far more broadly distributed across the population. This is especially significant in areas where access to internet or educational materials is limited.

Furthermore, libraries serve as inclusive social hubs that foster community engagement beyond a single demographic. Programs such as language classes, youth reading groups, and senior workshops address a wide range of social needs simultaneously.

While a sports complex would certainly encourage physical activity — a legitimate public health goal — these benefits can largely be achieved through existing recreation centres and parks.

For these reasons, a public library represents the more equitable and far-reaching investment for our community.`,
      },
      {
        id: "survey-rate",
        label: "Rate or Evaluate a Service / Experience",
        tag: "OPINION",
        context: "Asked to rate and evaluate a service, program, facility, or experience with reasons.",
        structure: [
          {
            part: "Opening Statement",
            desc: "State your overall rating/evaluation and briefly indicate what it concerns.",
            phrases: [
              "Overall, I would rate my experience with [service/program] as [positive/negative/mixed], primarily due to [brief reason].",
              "My assessment of [program/facility/service] is largely [favourable/unfavourable], having encountered [highlight key experience].",
              "On balance, I found [the service/program/initiative] to be [highly effective / somewhat lacking / a significant improvement], though there are areas that warrant further attention.",
            ],
          },
          {
            part: "Positive Aspect (What Worked Well)",
            phrases: [
              "Among the strengths of [the program/service], I was particularly impressed by [specific positive]. This aspect was especially valuable because [reason], and it had a tangible impact on [outcome or experience].",
              "One area that stood out positively was [specific strength]. The [staff/design/process] demonstrated [quality], which made [aspect of the experience] notably smooth and effective.",
            ],
          },
          {
            part: "Area for Improvement",
            phrases: [
              "However, there are certain areas that could be meaningfully improved. In particular, [specific issue] presented [challenge], which detracted from an otherwise positive experience. I would recommend [specific suggestion] to address this.",
              "One notable shortcoming was [specific problem]. This is an area that, with modest attention, could be significantly improved. Specifically, [targeted recommendation] would enhance the overall experience for future participants.",
            ],
          },
          {
            part: "Closing",
            phrases: [
              "In summary, [service/program] provides genuine value but would benefit from targeted improvements in [area]. With these adjustments, it has the potential to be an exceptional resource for the community.",
              "Overall, I would encourage continued investment in [program/service] while prioritizing the improvements outlined above. The foundation is strong, and with refinement, the impact could be considerably greater.",
            ],
          },
        ],
        example: `Survey Question: Please rate your experience with the city's new online permit application system.

Overall, I would rate the new online permit application system as satisfactory, with notable strengths that are somewhat offset by areas requiring improvement.

The most commendable aspect of the new system is its accessibility. Being able to submit applications at any time of day, from any location, eliminates the need for in-person visits and has made the process considerably more convenient. The step-by-step interface is also well-organized, guiding applicants through each requirement in a logical sequence, which reduced the likelihood of errors in my submission.

However, the system's confirmation and communication features require attention. After submitting my application, I received no automated acknowledgement email, which left me uncertain whether the submission had been processed successfully. A simple confirmation notification would significantly improve the user experience and reduce unnecessary follow-up inquiries.

In summary, the online permit system represents a meaningful improvement over the previous process and should be maintained and expanded. With the addition of clearer status notifications and a direct contact channel for technical issues, it has the potential to become an outstanding civic service.`,
      },
      {
        id: "survey-problem-solution",
        label: "Identify a Problem & Propose Solutions",
        tag: "OPINION",
        context: "Asked to describe a community or workplace problem and suggest how it can be addressed.",
        structure: [
          {
            part: "Opening",
            phrases: [
              "In my view, one of the most pressing challenges currently facing [community/workplace/organization] is [problem], a situation that has had a measurable impact on [those affected].",
              "The issue of [problem] represents a significant concern that deserves immediate and sustained attention. Without effective intervention, its impact on [affected group/outcome] is likely to worsen.",
            ],
          },
          {
            part: "Describe the Problem",
            phrases: [
              "The root of the issue lies in [underlying cause]. As a result, [describe the consequence or negative outcome], which has placed considerable strain on [people, resources, or systems involved].",
              "This problem manifests in several ways: [description of how it shows up in daily life or operations]. The consequences range from [minor inconvenience] to [more serious impact], and without targeted action, the situation is unlikely to improve on its own.",
            ],
          },
          {
            part: "Propose Solutions",
            phrases: [
              "To address this effectively, I would propose a two-pronged approach. First, [Solution 1 — practical, short-term measure]. This would immediately alleviate [specific aspect of the problem]. Second, [Solution 2 — longer-term or structural change] would address the root cause and create a more sustainable outcome.",
              "A practical first step would be [specific, actionable recommendation]. In addition, [second recommendation] would help ensure that the issue does not recur by targeting [underlying cause].",
            ],
          },
          {
            part: "Closing",
            phrases: [
              "With the right combination of immediate action and long-term planning, [problem] is entirely addressable. I encourage decision-makers to treat this as a priority and to engage the community in developing solutions.",
              "Addressing [problem] requires both political will and community engagement. If tackled systematically, the improvements would benefit [broad group] and contribute significantly to [goal — quality of life, productivity, safety, etc.].",
            ],
          },
        ],
        example: `Survey Question: What is the biggest challenge in your neighbourhood, and how should it be addressed?

In my view, one of the most pressing challenges currently facing our neighbourhood is the lack of safe, accessible pedestrian infrastructure, a situation that has had a measurable impact on both daily mobility and community safety.

The issue is most evident on [Street Name] and surrounding roads, where sidewalks are either absent or in a state of considerable disrepair. During winter months especially, this creates hazardous conditions for elderly residents, parents with strollers, and individuals with mobility challenges. The absence of clearly marked crosswalks at key intersections further compounds the problem, as residents are frequently forced to navigate traffic without adequate protection.

To address this effectively, I would propose a two-pronged approach. In the short term, the city should prioritize immediate repairs to existing sidewalk infrastructure and install clearly marked pedestrian crossings at high-traffic intersections. In the longer term, a neighbourhood-wide audit of pedestrian infrastructure should inform a phased improvement plan with dedicated funding.

With targeted investment and a clear implementation timeline, these changes would significantly improve safety and accessibility for all residents.`,
      },
    ],
  },
};

// ─── Dark palette ─────────────────────────────────────────────────────────────
const C = {
  bg:         "#0d1117",
  surface:    "#161b22",
  surface2:   "#1c2333",
  surface3:   "#21262d",
  border:     "#30363d",
  border2:    "#3d444d",
  text:       "#e6edf3",
  textMuted:  "#8b949e",
  textDim:    "#6e7681",
  blue:       "#58a6ff",
  blueDark:   "#1f6feb",
  blueGlow:   "rgba(88,166,255,0.12)",
  green:      "#3fb950",
  greenGlow:  "rgba(63,185,80,0.12)",
  amber:      "#e3b341",
  amberGlow:  "rgba(227,179,65,0.12)",
  sky:        "#79c0ff",
  skyGlow:    "rgba(121,192,255,0.1)",
  purple:     "#bc8cff",
  purpleGlow: "rgba(188,140,255,0.12)",
  red:        "#f85149",
};

const TAG_STYLE = {
  FORMAL:   { bg: C.amberGlow,  color: C.amber,  border: "rgba(227,179,65,0.3)"  },
  INFORMAL: { bg: C.skyGlow,    color: C.sky,     border: "rgba(121,192,255,0.28)"},
  OPINION:  { bg: C.greenGlow,  color: C.green,   border: "rgba(63,185,80,0.28)"  },
};

const SECTIONS = [
  { title: "✉  Opening Lines",               key: "opening", accent: C.blue,   glow: C.blueGlow   },
  { title: "📝  Body / Evidence Paragraphs",  key: "body",    accent: C.green,  glow: C.greenGlow  },
  { title: "🙏  Request / Ask Sentences",     key: "request", accent: C.amber,  glow: C.amberGlow  },
  { title: "👋  Closing Lines",               key: "closing", accent: C.purple, glow: C.purpleGlow },
];

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
      style={{
        padding: "3px 10px", borderRadius: 6,
        fontSize: "0.71rem", fontFamily: "'DM Mono', monospace", fontWeight: 500,
        cursor: "pointer", whiteSpace: "nowrap", letterSpacing: "0.02em",
        transition: "all 0.18s",
        border: copied ? `1px solid ${C.green}` : `1px solid ${C.border2}`,
        background: copied ? C.greenGlow : C.surface3,
        color: copied ? C.green : C.textMuted,
      }}
    >{copied ? "✓ Copied" : "Copy"}</button>
  );
}

function PhraseCard({ text }) {
  return (
    <div style={{
      background: C.surface3, border: `1px solid ${C.border}`,
      borderRadius: 8, padding: "0.7rem 0.95rem", marginBottom: "0.5rem",
      display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem",
    }}>
      <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.875rem", color: C.text, lineHeight: 1.65, flex: 1, margin: 0 }}>
        {text}
      </p>
      <div style={{ flexShrink: 0, marginTop: 2 }}><CopyBtn text={text} /></div>
    </div>
  );
}

export default function App() {
  const [activeTask, setActiveTask] = useState("task1");
  const [activeScenario, setActiveScenario] = useState(0);
  const [showExample, setShowExample] = useState(false);
  const [activeStructPart, setActiveStructPart] = useState(null);

  const task = templates[activeTask];
  const scenario = task.scenarios[activeScenario];
  const tag = TAG_STYLE[scenario.tag];

  const switchTask = (t) => { setActiveTask(t); setActiveScenario(0); setShowExample(false); setActiveStructPart(null); };
  const switchScenario = (i) => { setActiveScenario(i); setShowExample(false); setActiveStructPart(null); };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, minHeight: "100vh", color: C.text }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* ── HEADER ── */}
      <div style={{
        background: `linear-gradient(160deg, #0d1117 0%, #0d1e36 50%, #091629 100%)`,
        borderBottom: `1px solid ${C.border}`,
        padding: "2.25rem 1.5rem 2rem",
        position: "relative", overflow: "hidden",
      }}>
        {/* Glow blobs */}
        <div style={{ position:"absolute", top:-80, left:"30%", width:500, height:280, borderRadius:"50%", background:"radial-gradient(ellipse,rgba(88,166,255,0.07) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:20, right:"10%", width:200, height:200, borderRadius:"50%", background:"radial-gradient(ellipse,rgba(63,185,80,0.05) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ maxWidth: 880, margin: "0 auto", position: "relative" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"0.55rem", marginBottom:"0.65rem" }}>
            <span style={{ background: C.blueDark, color:"#cfe3ff", fontSize:"0.67rem", fontWeight:700, padding:"2px 10px", borderRadius:99, letterSpacing:"0.1em", textTransform:"uppercase", border:`1px solid rgba(88,166,255,0.35)` }}>
              CLB 10+ Standard
            </span>
            <span style={{ background:"rgba(255,255,255,0.04)", color:C.textDim, fontSize:"0.67rem", padding:"2px 10px", borderRadius:99, letterSpacing:"0.05em", border:`1px solid ${C.border}` }}>
              CELPIP General — Canadian PR
            </span>
          </div>
          <h1 style={{
            fontSize:"1.75rem", fontWeight:700, fontFamily:"'Lora', serif", letterSpacing:"-0.025em", marginBottom:"0.35rem",
            background:`linear-gradient(100deg, ${C.text} 30%, ${C.sky} 100%)`,
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
          }}>CELPIP Writing Templates</h1>
          <p style={{ color:C.textDim, fontSize:"0.82rem", letterSpacing:"0.01em" }}>
            Reusable openers · body phrases · closings &nbsp;·&nbsp; All scenarios &nbsp;·&nbsp; Task 1 &amp; Task 2
          </p>
        </div>
      </div>

      <div style={{ maxWidth:880, margin:"0 auto", padding:"1.5rem 1rem 4rem" }}>

        {/* ── TASK TABS ── */}
        <div style={{ display:"flex", gap:"0.5rem", marginBottom:"1.25rem" }}>
          {["task1","task2"].map(t => (
            <button key={t} onClick={() => switchTask(t)} style={{
              padding:"0.55rem 1.15rem", borderRadius:8, fontWeight:600, fontSize:"0.83rem",
              cursor:"pointer", transition:"all 0.15s",
              border: activeTask===t ? `1px solid ${C.blue}` : `1px solid ${C.border}`,
              background: activeTask===t ? C.blueGlow : C.surface,
              color: activeTask===t ? C.blue : C.textMuted,
              boxShadow: activeTask===t ? `0 0 16px rgba(88,166,255,0.12)` : "none",
            }}>
              {templates[t].label}
              <span style={{ marginLeft:"0.45rem", fontSize:"0.7rem", opacity:0.6 }}>{templates[t].time}</span>
            </button>
          ))}
        </div>

        {/* ── SCENARIO PILLS ── */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem", marginBottom:"1.25rem" }}>
          {task.scenarios.map((s,i) => (
            <button key={s.id} onClick={() => switchScenario(i)} style={{
              padding:"0.33rem 0.85rem", borderRadius:6, fontSize:"0.78rem",
              fontWeight: activeScenario===i ? 600 : 400, cursor:"pointer", transition:"all 0.12s",
              border: activeScenario===i ? `1px solid ${C.blue}` : `1px solid ${C.border}`,
              background: activeScenario===i ? C.blueGlow : C.surface,
              color: activeScenario===i ? C.blue : C.textMuted,
            }}>{s.label}</button>
          ))}
        </div>

        {/* ── SCENARIO HEADER ── */}
        <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:12, padding:"1.1rem 1.3rem", marginBottom:"1rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"0.4rem" }}>
            <span style={{ background:tag.bg, color:tag.color, border:`1px solid ${tag.border}`, fontSize:"0.67rem", fontWeight:700, padding:"2px 9px", borderRadius:99, letterSpacing:"0.08em", textTransform:"uppercase" }}>
              {scenario.tag}
            </span>
            <span style={{ fontWeight:600, color:C.text, fontSize:"0.97rem", fontFamily:"'Lora', serif" }}>{scenario.label}</span>
          </div>
          <p style={{ color:C.textMuted, fontSize:"0.82rem", lineHeight:1.55, margin:0 }}>{scenario.context}</p>
        </div>

        {/* ── TASK 1: SECTIONS ── */}
        {activeTask==="task1" && (
          <div>
            {SECTIONS.map(({ title, key, accent, glow }) =>
              scenario[key] ? (
                <div key={key} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:12, marginBottom:"0.85rem", overflow:"hidden" }}>
                  <div style={{ background:glow, borderLeft:`3px solid ${accent}`, padding:"0.7rem 1.2rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
                    <span style={{ fontWeight:600, color:accent, fontSize:"0.82rem" }}>{title}</span>
                    <span style={{ color:C.textDim, fontSize:"0.71rem" }}>— choose one that fits</span>
                  </div>
                  <div style={{ padding:"0.85rem 1.1rem" }}>
                    {scenario[key].map((p,i) => <PhraseCard key={i} text={p} />)}
                  </div>
                </div>
              ) : null
            )}
          </div>
        )}

        {/* ── TASK 2: ACCORDION ── */}
        {activeTask==="task2" && (
          <div>
            {scenario.structure.map((part,i) => {
              const open = activeStructPart===i || activeStructPart===null;
              return (
                <div key={i} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:12, marginBottom:"0.75rem", overflow:"hidden" }}>
                  <button onClick={() => setActiveStructPart(activeStructPart===i ? null : i)} style={{
                    width:"100%", textAlign:"left", cursor:"pointer",
                    background: open ? C.blueGlow : C.surface2,
                    borderLeft:`3px solid ${C.blue}`,
                    borderTop:"none", borderRight:"none",
                    borderBottom: open ? `1px solid ${C.border}` : "none",
                    padding:"0.75rem 1.15rem",
                    display:"flex", justifyContent:"space-between", alignItems:"center",
                  }}>
                    <div>
                      <span style={{ fontWeight:600, color:C.blue, fontSize:"0.82rem" }}>
                        <span style={{ opacity:0.45, fontFamily:"'DM Mono',monospace", marginRight:"0.45rem", fontSize:"0.75rem" }}>
                          {String(i+1).padStart(2,"0")}
                        </span>
                        {part.part}
                      </span>
                      {part.desc && <p style={{ color:C.textDim, fontSize:"0.72rem", marginTop:"0.13rem", marginBottom:0 }}>{part.desc}</p>}
                    </div>
                    <span style={{ color:C.textDim, fontSize:"0.78rem", marginLeft:"1rem" }}>{open?"▲":"▼"}</span>
                  </button>
                  {open && (
                    <div style={{ padding:"0.85rem 1.1rem" }}>
                      {part.phrases.map((p,j) => <PhraseCard key={j} text={p} />)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ── FULL EXAMPLE ── */}
        <div style={{ marginTop:"1.25rem", background:C.surface, border:`1px solid ${C.border}`, borderRadius:12, overflow:"hidden" }}>
          <button onClick={() => setShowExample(!showExample)} style={{
            width:"100%", padding:"0.9rem 1.3rem", textAlign:"left",
            border:"none", borderBottom: showExample ? `1px solid ${C.border}` : "none",
            background: showExample ? C.blueGlow : C.surface2,
            color:C.text, cursor:"pointer", fontWeight:600, fontSize:"0.86rem",
            display:"flex", justifyContent:"space-between", alignItems:"center", transition:"background 0.15s",
          }}>
            <span style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
              <span style={{ background:C.blueGlow, border:`1px solid rgba(88,166,255,0.3)`, color:C.blue, fontSize:"0.67rem", fontWeight:700, padding:"1px 8px", borderRadius:99, letterSpacing:"0.07em", textTransform:"uppercase" }}>
                Sample
              </span>
              Full Model Response — CLB 10+
            </span>
            <span style={{ fontSize:"0.74rem", color:C.textDim }}>{showExample?"Hide ▲":"Show ▼"}</span>
          </button>
          {showExample && (
            <div style={{ padding:"1.25rem 1.3rem" }}>
              <div style={{ display:"flex", justifyContent:"flex-end", marginBottom:"0.75rem" }}>
                <CopyBtn text={scenario.example} />
              </div>
              <pre style={{ fontFamily:"'Lora', Georgia, serif", fontSize:"0.875rem", color:C.text, lineHeight:1.8, whiteSpace:"pre-wrap", wordBreak:"break-word", margin:0, opacity:0.88 }}>
                {scenario.example}
              </pre>
            </div>
          )}
        </div>

        {/* ── SCORING TIPS ── */}
        <div style={{ marginTop:"1.25rem", background:C.surface, border:`1px solid ${C.border}`, borderRadius:12, padding:"1.2rem 1.3rem" }}>
          <p style={{ fontWeight:700, fontSize:"0.7rem", color:C.textDim, marginBottom:"0.9rem", letterSpacing:"0.12em", textTransform:"uppercase" }}>
            CLB 10+ Scoring Tips
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(210px, 1fr))", gap:"0.6rem" }}>
            {[
              { icon:"🎯", title:"Task Fulfillment", tip:"Address ALL bullet points in the prompt. Missing one drops your score significantly.",      color:C.red    },
              { icon:"🔗", title:"Coherence",        tip:"Use transition phrases: Furthermore, In addition, However, As a result, Consequently.",      color:C.blue   },
              { icon:"📚", title:"Vocabulary",       tip:"Vary your word choice. Avoid repeating the same noun or verb twice in one paragraph.",       color:C.purple },
              { icon:"✅", title:"Readability",      tip:"Mix sentence lengths. One short punchy sentence after 2 longer ones signals control.",        color:C.green  },
              { icon:"⏱️", title:"Time Strategy",    tip:"Plan 3–4 min → Write 18–20 min → Edit 3–4 min. Never skip the editing phase.",              color:C.amber  },
              { icon:"📏", title:"Word Count",       tip:"Aim for 185–200 words. Under 150 risks poor task fulfillment; over 220 wastes time.",        color:C.sky    },
            ].map(tip => (
              <div key={tip.title} style={{ background:C.surface2, border:`1px solid ${C.border}`, borderRadius:10, padding:"0.75rem 0.9rem" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.4rem", marginBottom:"0.3rem" }}>
                  <span style={{ fontSize:"0.95rem" }}>{tip.icon}</span>
                  <span style={{ fontWeight:600, fontSize:"0.78rem", color:tip.color }}>{tip.title}</span>
                </div>
                <p style={{ fontSize:"0.75rem", color:C.textMuted, lineHeight:1.55, margin:0 }}>{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
