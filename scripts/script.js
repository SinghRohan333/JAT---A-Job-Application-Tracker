// console.log("JS connected");

let applicationData = [
  {
    aID: 1,
    company: "Mobile First Corp",
    role: "React Native Developer",
    type: "Remote",
    time: "Full-time",
    salary: "$130,000 - $175,000",
    stature: "NOT APPLIED",
    work: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    iStatus: false,
    rStatus: false,
  },
  {
    aID: 2,
    company: "WebFlow Agency",
    role: "Web Designer & Developer",
    type: "Los Angeles, CA",
    time: "Part-time",
    salary: "$80,000 - $120,000",
    stature: "NOT APPLIED",
    work: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    iStatus: false,
    rStatus: false,
  },
  {
    aID: 3,
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    type: "Boston, MA",
    time: "Full-time",
    salary: "$125,000 - $165,000",
    stature: "NOT APPLIED",
    work: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    iStatus: false,
    rStatus: false,
  },
  {
    aID: 4,
    company: "CloudFirst Inc",
    role: "Backend Developer",
    type: "Seattle, WA",
    time: "Full-time",
    salary: "$140,000 - $190,000",
    stature: "NOT APPLIED",
    work: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure",
    iStatus: false,
    rStatus: false,
  },
  {
    aID: 5,
    company: "Innovation Labs",
    role: "UI/UX Engineer",
    type: "Austin, TX",
    time: "Full-time",
    salary: "$110,000 - $150,000",
    stature: "NOT APPLIED",
    work: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    iStatus: false,
    rStatus: false,
  },
  {
    aID: 6,
    company: "MegaCorp Solutions",
    role: "JavaScript Developer",
    type: "New York, NY",
    time: "Full-time",
    salary: "$130,000 - $170,00",
    stature: "NOT APPLIED",
    work: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    iStatus: false,
    rStatus: false,
  },
  {
    aID: 7,
    company: "StartupXYZ",
    role: "Full Stack Engineer",
    type: "Remote",
    time: "Full-time",
    salary: "$120,000 - $160,000",
    stature: "NOT APPLIED",
    work: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    iStatus: false,
    rStatus: false,
  },
  {
    aID: 8,
    company: "TechCorp Industries",
    role: "Senior Frontend Developer",
    type: "San Francisco, CA",
    time: "Full-time",
    salary: "$130,000 - $175,000",
    stature: "NOT APPLIED",
    work: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    iStatus: false,
    rStatus: false,
  },
];

// console.log(applicationData.length);

let total1 = document.getElementById("total1");
let total2 = document.getElementById("total2");
let intCnt = document.getElementById("intCnt");
let rejectCnt = document.getElementById("rejectCnt");

let jobTitle = document.getElementById("jobTitle");

let tabs = document.querySelectorAll('input[name="my_tabs_4"]');

// console.log(tabs);

let allSec = document.getElementById("allSection");
let interviewSec = document.getElementById("interviewSection");
let rejectSec = document.getElementById("rejectSection");

let interviewBtnArr = document.getElementsByClassName("interViewCls");
let deleteBtnArr = document.getElementsByClassName("del");

// console.log(deleteBtnArr);

let badgeStatus = document.getElementsByClassName("badgeStatus");
// console.log(badgeStatus);

let interviewData = [];
let rejectData = [];

function fun() {
  let currTab = "";
  for (let t of tabs) {
    if (t.checked) {
      currTab = t.parentNode.children[2].innerText;
      currTab = currTab.toLowerCase();
      // console.log(currTab);
    }
  }
  // console.log("currTab passing ", currTab);
  handleJobTitle(currTab);
}

function calculateData() {
  total1.innerText = applicationData.length;
  total2.innerText = `${applicationData.length} ${applicationData.length > 1 ? "jobs" : "job"}`;
  intCnt.innerText = interviewData.length;
  rejectCnt.innerText = rejectData.length;
}

function handleJobTitle(title) {
  if (title === "all") {
    jobTitle.innerText = "Available Jobs (Total)";
    total2.innerText = `${applicationData.length} ${applicationData.length > 1 ? "jobs" : "job"}`;
  } else if (title === "interview") {
    jobTitle.innerText = "Available Jobs (Interview/Total)";
    total2.innerText = `${interviewData.length} of ${applicationData.length} ${applicationData.length > 1 ? "jobs" : "job"}`;
  } else if (title === "rejected") {
    jobTitle.innerText = "Available Jobs (Rejected/Total)";
    total2.innerText = `${rejectData.length} of ${applicationData.length} ${applicationData.length > 1 ? "jobs" : "job"}`;
  }
}

function allSecDataShowing() {
  // console.log("app len: ", applicationData.length);

  if (applicationData.length > 0) {
    let allCardsHtml = "";
    for (let a of applicationData) {
      //   console.log(a);
      let customBadge = "bg-neutral";
      let customTxt = "text-[#A6ADBB]";
      if (a.stature === "Interview") {
        customBadge = "bg-success";
        customTxt = "text-slate-900";
      } else if (a.stature === "Rejected") {
        customBadge = "bg-error";
        customTxt = "text-slate-900";
      }

      allCardsHtml += `
        <div
              class="card bg-[#1D232A] border-[#38414A] text-primary-content w-full mb-8"
            >
              <div class="flex justify-between items-center p-6 pb-2">
                <section>
                  <div>
                    <h1
                      class="text-lg sm:text-2xl font-bold text-[#F2F2F2] leading-relaxed"
                    >
                      ${a.company}
                    </h1>
                    <p class="text-sm sm:text-lg text-[#A6ADBB]">${a.role}</p>
                  </div>
                </section>
                <div>
                  <div class="tooltip">
                    <div class="tooltip-content">
                      <div
                        class="animate-bounce text-red-500 text-2xl font-black"
                      >
                        Delete!
                      </div>
                    </div>
                    <button class="cursor-pointer hover:text-red-600 del" onclick="delFunc(${a.aID})">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              </div>

              <ul class="p-8 flex flex-col sm:gap-8 lg:flex-row list-disc text-[#F2F2F2] pb-2 mb-1">
                <li>${a.type}</li>
                <li>${a.time}</li>
                <li>${a.salary}</li>
              </ul>

              <section class="p-4 pb-2 mb-1">
                <div class="badge ${customBadge} text-xl p-5 ${customTxt} badgeStatus">
                  ${a.stature}
                </div>
              </section>

              <div class="px-6 py-3 mb-1">
                <p class="text-[#F2F2F2] text-xs sm:text-base">
                  ${a.work}
                </p>
              </div>

              <section class="px-6 pt-3 pb-6 flex gap-3 items-center flex-wrap">
                <button class="btn btn-outline btn-success text-xl interViewCls" onclick="changeBadgeStatus(${a.aID}, 'interview')">
                  Interview
                </button>
                <button class="btn btn-outline btn-error text-xl" onclick="changeBadgeStatus(${a.aID}, 'rejected')">
                  Rejected
                </button>
              </section>
            </div>
        `;
    }
    allSec.innerHTML = allCardsHtml;
  } else {
    allSec.innerHTML = `
      <div class="card border border-[#38414A] bg-[#1D232A] w-full">
              <figure class="mt-12">
                <img src="./assests/jobs.png" alt="jobs" />
              </figure>
              <div class="card-body">
                <h2 class="text-center font-bold text-2xl">
                  No jobs available
                </h2>
                <p class="text-center">
                  Check back soon for new job opportunities
                </p>
              </div>
            </div>
    `;
  }
}

function interviewSecDataShowing() {
  if (interviewData.length > 0) {
    // console.log("interview len: ", interviewData.length);
    let interviewCardHtml = "";

    for (let inter of interviewData) {
      interviewCardHtml += `
        <div
              class="card bg-[#1D232A] border-[#38414A] text-primary-content w-full mb-8"
            >
              <div class="flex justify-between items-center p-6 pb-2">
                <section>
                  <div>
                    <h1
                      class="text-lg sm:text-2xl font-bold text-[#F2F2F2] leading-relaxed"
                    >
                      ${inter.company}
                    </h1>
                    <p class="text-sm sm:text-lg text-[#A6ADBB]">${inter.role}</p>
                  </div>
                </section>
                <div>
                  <div class="tooltip">
                    <div class="tooltip-content">
                      <div
                        class="animate-bounce text-red-500 text-2xl font-black"
                      >
                        Delete!
                      </div>
                    </div>
                    <button class="cursor-pointer hover:text-red-600 del" onclick="delFunc(${inter.aID})">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              </div>

              <ul class="p-8 flex flex-col sm:gap-8 lg:flex-row list-disc text-[#F2F2F2] pb-2 mb-1">
                <li>${inter.type}</li>
                <li>${inter.time}</li>
                <li>${inter.salary}</li>
              </ul>

              <section class="p-4 pb-2 mb-1">
                <div class="badge badge-success text-xl p-5 text-slate-900 badgeStatus">
                  ${inter.stature}
                </div>
              </section>

              <div class="px-6 py-3 mb-1">
                <p class="text-[#F2F2F2] text-xs sm:text-base">
                  ${inter.work}
                </p>
              </div>

              <section class="px-6 pt-3 pb-6 flex gap-3 items-center flex-wrap">
                <button class="btn btn-outline btn-success text-xl interViewCls" onclick="changeBadgeStatus(${inter.aID}, 'interview')">
                  Interview
                </button>
                <button class="btn btn-outline btn-error text-xl" onclick="changeBadgeStatus(${inter.aID}, 'rejected')">
                  Rejected
                </button>
              </section>
            </div>
        `;
    }
    interviewSec.innerHTML = interviewCardHtml;
  } else {
    interviewSec.innerHTML = `
      <div class="card border border-[#38414A] bg-[#1D232A] w-full">
              <figure class="mt-12">
                <img src="./assests/jobs.png" alt="jobs" />
              </figure>
              <div class="card-body">
                <h2 class="text-center font-bold text-2xl">
                  No jobs available
                </h2>
                <p class="text-center">
                  Check back soon for new job opportunities
                </p>
              </div>
            </div>
    `;
  }
}

function rejectSecDataShowing() {
  if (rejectData.length > 0) {
    let rejectCardHtml = "";

    for (let r of rejectData) {
      rejectCardHtml += `
        <div
              class="card bg-[#1D232A] border-[#38414A] text-primary-content w-full mb-8"
            >
              <div class="flex justify-between items-center p-6 pb-2">
                <section>
                  <div>
                    <h1
                      class="text-lg sm:text-2xl font-bold text-[#F2F2F2] leading-relaxed"
                    >
                      ${r.company}
                    </h1>
                    <p class="text-sm sm:text-lg text-[#A6ADBB]">${r.role}</p>
                  </div>
                </section>
                <div>
                  <div class="tooltip">
                    <div class="tooltip-content">
                      <div
                        class="animate-bounce text-red-500 text-2xl font-black"
                      >
                        Delete!
                      </div>
                    </div>
                    <button class="cursor-pointer hover:text-red-600 del" onclick="delFunc(${r.aID})">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              </div>

              <ul class="p-8 flex flex-col sm:gap-8 lg:flex-row lg:items-center list-disc text-[#F2F2F2] pb-2 mb-1">
                <li>${r.type}</li>
                <li>${r.time}</li>
                <li>${r.salary}</li>
              </ul>

              <section class="p-4 pb-2 mb-1">
                <div class="badge badge-error text-xl p-5 text-slate-900 badgeStatus">
                  ${r.stature}
                </div>
              </section>

              <div class="px-6 py-3 mb-1">
                <p class="text-[#F2F2F2] text-xs sm:text-base">
                  ${r.work}
                </p>
              </div>

              <section class="px-6 pt-3 pb-6 flex gap-3 items-center flex-wrap">
                <button class="btn btn-outline btn-success text-xl interViewCls" onclick="changeBadgeStatus(${r.aID}, 'interview')">
                  Interview
                </button>
                <button class="btn btn-outline btn-error text-xl" onclick="changeBadgeStatus(${r.aID}, 'rejected')">
                  Rejected
                </button>
              </section>
            </div>
        `;
    }
    rejectSec.innerHTML = rejectCardHtml;
  } else {
    rejectSec.innerHTML = `
      <div class="card border border-[#38414A] bg-[#1D232A] w-full">
              <figure class="mt-12">
                <img src="./assests/jobs.png" alt="jobs" />
              </figure>
              <div class="card-body">
                <h2 class="text-center font-bold text-2xl">
                  No jobs available
                </h2>
                <p class="text-center">
                  Check back soon for new job opportunities
                </p>
              </div>
            </div>
    `;
  }
}

function changeBadgeStatus(id, state) {
  // console.log(id);
  if (state === "interview" && applicationData[id - 1].iStatus === false) {
    applicationData[id - 1].iStatus = true;
    applicationData[id - 1].stature = "Interview";
    badgeStatus[id - 1].innerText = applicationData[id - 1].stature;

    interviewData.push(applicationData[id - 1]);

    if (applicationData[id - 1].rStatus === true) {
      applicationData[id - 1].rStatus = false;
      badgeStatus[id - 1].classList.replace("badge-error", "badge-success");

      rejectData = rejectData.filter((i) => i.aID != id);
    } else {
      badgeStatus[id - 1].classList.replace("badge-neutral", "badge-success");
      badgeStatus[id - 1].classList.replace("text-[#A6ADBB]", "text-slate-900");
    }
  } else if (
    state === "rejected" &&
    applicationData[id - 1].rStatus === false
  ) {
    applicationData[id - 1].rStatus = true;
    applicationData[id - 1].stature = "Rejected";
    badgeStatus[id - 1].innerText = applicationData[id - 1].stature;

    rejectData.push(applicationData[id - 1]);

    if (applicationData[id - 1].iStatus === true) {
      applicationData[id - 1].iStatus = false;
      badgeStatus[id - 1].classList.replace("badge-success", "badge-error");

      interviewData = interviewData.filter((i) => i.aID != id);
    } else {
      badgeStatus[id - 1].classList.replace("badge-neutral", "badge-error");
      badgeStatus[id - 1].classList.replace("text-[#A6ADBB]", "text-slate-900");
    }
  }
  // console.log("here is the application data:");
  // console.log(applicationData[id - 1]);

  // console.log("Interview Data coming....:");
  // console.log(interviewData);

  interviewSecDataShowing();
  rejectSecDataShowing();
  calculateData();
  allSecDataShowing();
  fun();
}

function delFunc(id) {
  // console.log(id);
  applicationData = applicationData.filter((i) => i.aID != id);
  interviewData = interviewData.filter((i) => i.aID != id);
  rejectData = rejectData.filter((i) => i.aID != id);
  let n = applicationData.length;
  for (let i = 0; i < n; i++) {
    applicationData[i].aID = i + 1;
  }

  // console.log(applicationData.length);
  // console.log(applicationData);

  calculateData();
  allSecDataShowing();
  interviewSecDataShowing();
  rejectSecDataShowing();
  // changeBadgeStatus(id, st);
  fun();
}

calculateData();
allSecDataShowing();
// interviewSecDataShowing();
