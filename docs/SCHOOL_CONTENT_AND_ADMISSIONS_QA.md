# School content and admissions quality assurance

## Purpose and implementation
This repository contains a static school website. `package.json` describes Node >=22, a Sass source at `src/scss/main.scss`, a built stylesheet at `css/main.css`, and `npm run build:css`. The page is not a verified admissions system. The procedure here prevents a visual school site from publishing guessed enrollment information or implying a working application flow.

## Admissions facts register
| Data | Required confirmation |
| --- | --- |
| Institution name and location | Authorized school contact and public address |
| Academic year and admissions deadline | Dated approved notice; remove expired dates |
| Grade levels, eligibility and seats | Current admissions team policy |
| Fees, scholarships and discounts | Official fee notice with currency and conditions |
| Schedule, class hours and transport | Current calendar or authorized representative |
| Facilities, affiliations and exam results | Evidence and permission for public claims |
| Telephone, email, map and inquiry links | Tested destination, published contact owner |
| Child/student imagery or quotations | Explicit permission, appropriate safeguarding and withdrawal process |

Do not publish student IDs, grades, contact lists, guardian information, or unconsented identifiable child photographs.

## Local review steps
1. Run `npm ci` when a matching committed lockfile exists; otherwise document the install method.
2. Use `npm run build:css` to regenerate the stylesheet from tracked Sass source and inspect the resulting diff.
3. Serve the repository root with `python3 -m http.server 8000` and open `index.html`.
4. Use keyboard and touch navigation to reach programs, admissions and contact details; verify focus, visible errors and reading order.
5. Check 320px-wide and desktop layouts for text wrapping, navigation overflow, button sizing and image crop.
6. Inspect `robots.txt`, `sitemap.xml`, canonical links and on-page descriptions; verify current live URL assumptions before editing.
7. Open each admission, telephone, email, location and form CTA; do not claim form submission works unless a backend or recipient is verified.
8. Capture before/after screenshots and manual findings for changes that affect parents or students.

## Acceptance and release record
- [ ] Admissions and school facts approved by a named owner and dated.
- [ ] Dates/fees disclosed with conditions and updated across page, schema and previews.
- [ ] No private student/family data or unconsented media exposed.
- [ ] CSS generation and intended build artifacts reviewed.
- [ ] Mobile, keyboard, image alternatives and contrast validated.
- [ ] All important destinations checked.
- [ ] Deployment source and published page rechecked after release.

```text
Pull request / reviewer / date:
Content approval and effective academic year:
Sass build command and result:
Mobile and keyboard test devices:
Link / admissions path test results:
Media permission record reference:
Published URL and verification timestamp:
Known exceptions, owner and rollback:
```

## Limits
The checklist is not an assertion that the school is operating, accepting applications, or meeting any accreditation requirement. Actual data, accessibility and deployment acceptance must be verified per release.
