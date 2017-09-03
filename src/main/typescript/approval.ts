import { ApprovedDomains } from "./classes/ApprovedDomains"

let email = "martin.skorupski@highstreet-technologies.com"
if (process.argv.length > 2) {
  email = process.argv[2]
}

let ad = new ApprovedDomains()
let approved = ad.isApproved(email)

if (approved) {
    console.log(" OK: ", email, "is approved")
} else {
    console.log("nOK: ", email, "is NOT approved")
}
