# School site: admissions content and accessibility QA

School pages may influence how families plan applications, visits and payments. Facts about admissions, programs and fees must come from an approved school source, with the date of verification and any eligibility conditions recorded.

## Source verification register

| Public information | Required confirmation |
| --- | --- |
| School name and address | Approved institutional identity and current location |
| Admissions dates | Official admission notice, academic year and cutoff/time zone |
| Eligibility | Correct program/grade, age rules and required documents |
| Fees and financial support | Approved fee schedule, currency and exclusions |
| Contact details | Authorized phone/email/form destination and working hours |
| Classes and facilities | Current verified program inventory rather than aspirational marketing |
| Awards and examination results | Traceable source, cohort and year |
| Photos of students | Valid authority/consent and appropriate handling of children's privacy |

If source material is missing, omit the specific claim or mark it clearly as pending confirmation. Do not use sample student names, grades, photographs or addresses from real records as public fixtures.

## Page and interaction acceptance

1. A parent can find program eligibility and an official inquiry route without guessing.
2. Dates state the correct year; expired notices are removed or labelled historical.
3. Navigation, contact actions and any admission forms work with keyboard and visible focus.
4. Validation states explain errors without exposing private application details.
5. Language, headings, text alternatives and contrast support assistive technology.
6. The page remains readable at narrow screen widths and 200% zoom.
7. Search previews, structured data and sitemap entries match content actually published, not test copy.

## Reproducible checks

The repository includes a static homepage, **src/scss/** and compiled **css/** plus a package manifest. With Node.js 22 or newer at repository root:

~~~bash
npm install
npm run check:format
npm run build:css
~~~

For an isolated local preview, serve the repository root using:

~~~bash
python -m http.server 8000
~~~

Note that building CSS may update generated files; do not commit generated output unless the change is intentional. Formatting and CSS compilation do not validate school facts or real form delivery.

## Publication record

Each PR should list changed pages, factual source/owner, observation date, screenshots and devices, links checked, automated command results and unresolved items. Inquiries involving minors require especially careful privacy review.

## Correction and rollback

An incorrect deadline, price, contact endpoint or image should be corrected promptly and the affected stakeholders notified as appropriate. Keep an internal correction trail while avoiding public exposure of children's data.
