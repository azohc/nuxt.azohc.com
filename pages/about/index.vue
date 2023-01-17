<template>
  <main>
    <h1>about</h1>
    <section>
      <h2>education</h2>
      <hr />
      <DatedExperience
        heading="harbour space university"
        period="2022 - 2023"
        subheading="master of front-end development"
      >
        <p>
          as of the end of 2022, i've learnt about vue.js (with the composition
          api and nuxt 3.0) and design systems
        </p>
      </DatedExperience>
      <DatedExperience
        heading="universidad complutense madrid"
        period="2016 - 2020"
        subheading="bachelor of computer science"
      >
        <ul>
          <li>computation specialization</li>
          <li>
            erasmus at <strong>universiteit leiden</strong> during the second
            semester of 2020
          </li>
          <li>
            final project:
            <a
              target="_blank"
              href="https://github.com/azohc/jucesampler/blob/master/memoire/mem-jcs.pdf"
            >
              a sampler plugin for digital audio workstations
            </a>
          </li>
        </ul>
      </DatedExperience>
    </section>

    <section>
      <h2>technical skills</h2>
      <hr />
      backend: java, spring, nginx, sql, maven, python, c++
      <br />
      frontend: javascript, html, css, typescript, angular, vue
      <br />
      misc: git, bash, agile, jira, maven, tdd
    </section>

    <section>
      <h2>professional experience</h2>
      <hr />
      <DatedExperience
        heading="spanish engineers"
        period="may 2022 - november 2022"
        subheading="full stack developer"
      >
        <ul>
          <li>
            documented the local environment configuration process for front-end
            and full stack development
          </li>
          <li>
            implemented new features on a web application featuring dashboards
            to visualize data metrics across different periods of time
          </li>
          <li>
            supported the creation of a proof of concept for the app's migration
            from angularjs to angular 14
          </li>
        </ul>
      </DatedExperience>
      <DatedExperience
        heading="guidewire software"
        period="may 2021 - march 2022"
        subheading="consultant developer"
      >
        <ul>
          <li>
            presented information gathered during the onboarding and training
            and applied the constructive criticism and feedback
          </li>
          <li>
            attained policycenter and integration certifications for
            insurancesuite applications
          </li>
          <li>
            participated in the upgrade process of a policycenter application
          </li>
          <li>
            conducted demonstrations of the upgrade's incremental deliverables,
            ensuring with the client that all of the older use cases were
            covered in the new policycenter version
          </li>
        </ul>
      </DatedExperience>
      <DatedExperience
        heading="solera"
        period="november 2020 - march 2021"
        subheading="software development engineer"
      >
        <ul>
          <li>
            delivered new features on a automobile lifecycle web application.
            implementations covered the full stack, which was a java spring
            micro services backend on the server side
          </li>
          <li>
            actively participated in several scrum ceremonies, acquiring a
            decent notion of what agile entails
          </li>
          <li>
            was involved in code reviews, jenkins ci/cd configuration, and unit
            testing
          </li>
        </ul>
      </DatedExperience>
      <DatedExperience
        heading="itestra gmbh"
        period="across 2019"
        subheading="full-stack developer"
      >
        <ul>
          <li>
            collected foundation level skills in html, css, and typescript with
            angular 9
          </li>
          <li>
            identified the importance of communication when collaborating on
            code
          </li>

          <li>
            learned valuable lessons in communication by speaking my mind and by
            muting it, by making mistakes in addition to providing my point of
            views genuinely and concisely
          </li>
        </ul>
      </DatedExperience>
    </section>
  </main>
</template>

<style scoped>
section {
  margin-bottom: 5rem;
}

article {
  margin-bottom: 3rem;
}
</style>
