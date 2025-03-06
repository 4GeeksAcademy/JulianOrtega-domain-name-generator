const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const extensions = ['.com', '.net', '.us', '.io'];

function generateDomains() {
    let domains = [];

    for (let p of pronoun) {
        for (let a of adj) {
            for (let n of noun) {
                for (let ext of extensions) {
                    let domain = p + a + n + ext;
                    domains.push(domain);

                    if (n.endsWith(ext.replace(".", ""))) {
                        let hackedDomain = p + a + "." + n;
                        domains.push(hackedDomain);
                    }
                }
            }
        }
    }
    return domains;
}

document.getElementById("generateBtn").addEventListener("click", () => {
    const domainList = document.getElementById("domainList");
    domainList.innerHTML = "";
    
    generateDomains().forEach(domain => {
        const li = document.createElement("li");
        li.textContent = domain;
        domainList.appendChild(li);
    });
});
