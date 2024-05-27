import { Ad1 } from "@/components/ads/ads";
import ExtraButton from "@/components/extras/button-extra";

const link = "/b";

const aPage = () => {
  return (
    <section className="w-full mx-auto max-w-[420px] my-1 flex flex-col rounded-2xl p-2 border-2 border-gray-700 demo">
      <div className="border-y-2 border-gray-700">
        <Ad1 />
      </div>
      <h2>क्या आपकी उम्र 13 साल से ज्यादा है ?</h2>
      <ExtraButton href={link} className="bg-green-700 border-yellow-500">
        Yes ✅
      </ExtraButton>
      <ExtraButton
        href={link}
        className="bg-red-700 mt-4 mb-6 border-yellow-500"
      >
        No ❌
      </ExtraButton>
      <h2 className="border-t-2 border-gray-700">
        Harvard University: Admission Process, Courses Offered, and Fees
        Structure
      </h2>
      <p>
        Harvard University, often referred to simply as Harvard, is one of the
        most prestigious and renowned institutions of higher education in the
        world. Located in Cambridge, Massachusetts, Harvard has a rich history
        dating back to its founding in 1636. With a commitment to excellence in
        education, research, and innovation, Harvard continues to attract the
        brightest minds from across the globe. In this article, we will explore
        Harvard University{`'`}s admission process, the diverse range of courses
        it offers, and its fees structure.{" "}
      </p>
      <h3>Admission Process</h3>
      <h4>Undergraduate Admission</h4>
      <p>
        Harvard University{`'`}s undergraduate admission process is highly
        competitive, with a low acceptance rate. To be considered for admission,
        prospective students must submit a comprehensive application that
        includes the following components:{" "}
      </p>
      <ol className="list-decimal">
        <li>
          <p>
            <span>Common Application or Coalition Application: </span>
            Applicants can choose between the Common Application and the
            Coalition Application. These platforms allow students to provide
            essential information about their academic background,
            extracurricular activities, and personal statements.
          </p>
        </li>
        <li>
          <p>
            <span>Standardized Tests: </span>
            Harvard requires applicants to submit standardized test scores, such
            as the SAT or ACT. However, due to the COVID-19 pandemic, Harvard
            adopted a test-optional policy for the 2021 and 2022 application
            cycles. This policy means that applicants are not required to submit
            SAT or ACT scores, but they can choose to if they believe it
            strengthens their application.
          </p>
        </li>
        <li>
          <p>
            <span>Academic Transcripts: </span>
            Applicants must provide transcripts from their high school,
            including information about their coursework and grades.
          </p>
        </li>
        <li>
          <p>
            <span>Letters of Recommendation: </span>
            Harvard requires applicants to submit two teacher evaluations and
            one counselor recommendation. These letters provide insights into
            the applicant{`'`}s character, academic abilities, and potential.
          </p>
        </li>
        <li>
          <p>
            <span>Interviews: </span>
            While not mandatory, interviews are encouraged and are typically
            conducted by Harvard alumni in the applicant{`'`}s local area.
            Interviews provide an opportunity for applicants to discuss their
            interests and aspirations.
          </p>
        </li>
        <li>
          <p>
            <span>Essays: </span>
            Harvard requires several essays, including the personal essay and
            additional supplemental essays. These essays are a crucial component
            of the application and allow applicants to showcase their writing
            skills and personality.
          </p>
        </li>
        <li>
          <p>
            <span>Extracurricular Activities: </span>
            Applicants should provide information about their involvement in
            extracurricular activities, leadership roles, and any significant
            accomplishments.
          </p>
        </li>
      </ol>
      <p>
        It{`'`}s important to note that Harvard follows a holistic admissions
        process, considering not only academic achievements but also an
        applicant{`'`}s character, leadership qualities, and potential to
        contribute to the Harvard community.{" "}
      </p>
      <h4>Graduate and Professional Schools</h4>
      <p>
        Harvard University offers a wide range of graduate and professional
        programs across various schools, including Harvard Business School,
        Harvard Law School, Harvard Medical School, and more. The admission
        requirements for these programs vary, and prospective graduate students
        should consult the specific school or program they are interested in for
        detailed application instructions.
      </p>
      <h3>Courses Offered</h3>
      <p>
        Harvard University is renowned for its diverse and comprehensive range
        of courses across various disciplines. Some of the key areas of study at
        Harvard include:
      </p>
      <ol className="list-decimal">
        <li>
          <p>
            <span>Arts and Humanities: </span>
            Harvard offers programs in art, music, literature, history, and
            philosophy, providing students with a strong foundation in the
            humanities.
          </p>
        </li>
        <li>
          <p>
            <span>Science and Engineering: </span>
            Harvard{`'`}s School of Engineering and Applied Sciences (SEAS)
            offers cutting-edge programs in fields such as computer science,
            biology, chemistry, and engineering.
          </p>
        </li>
        <li>
          <p>
            <span>Social Sciences: </span>
            Harvard{`'`}s social sciences programs cover economics, psychology,
            sociology, government, and more, allowing students to explore the
            complexities of human behavior and society.
          </p>
        </li>
        <li>
          <p>
            <span>Business and Management: </span>
            Harvard{`'`}s Business School is renowned worldwide for its MBA
            program and executive education offerings, preparing future leaders
            in the business world.
          </p>
        </li>
        <li>
          <p>
            <span>Law and Legal Studies: </span>
            Harvard Law School is one of the top law schools globally, offering
            J.D. and LL.M. programs for aspiring lawyers and legal scholars.
          </p>
        </li>
        <li>
          <p>
            <span>Medicine and Health Sciences: </span>
            Harvard Medical School and the Harvard T.H. Chan School of Public
            Health offer programs in medicine, public health, and related
            fields, contributing to advancements in healthcare.
          </p>
        </li>
        <li>
          <p>
            <span>Education: </span>
            Harvard Graduate School of Education focuses on preparing educators,
            administrators, and policymakers to address the challenges in the
            field of education.
          </p>
        </li>
        <li>
          <p>
            <span>Public Policy and Government: </span>
            The Harvard Kennedy School offers programs in public policy,
            government, and international affairs, training future leaders in
            public service.
          </p>
        </li>
      </ol>
      <p>
        These are just a few examples, and Harvard{`'`}s course offerings extend
        far beyond these categories. The university{`'`}s commitment to academic
        excellence ensures that students have access to a wide array of
        educational opportunities.
      </p>
      <h3>Fees Structure</h3>
      <p>
        {" "}
        Harvard University is a private institution, and tuition fees can be
        substantial. However, Harvard is committed to making education
        accessible to all students, regardless of their financial backgrounds.
        Here{`'`}s an overview of the fees structure:{" "}
      </p>
      <ol className="list-decimal">
        <li>
          <p>
            <span>Tuition: </span>For the 2022-2023 academic year, the tuition
            fee for undergraduate students is approximately $55,000 per year.
            However, Harvard employs a need-blind admission process, which means
            that financial need is not a factor in the admission decision.
            Additionally, Harvard{`'`}s generous financial aid program ensures
            that students from low and middle-income families receive
            substantial financial support.
          </p>
        </li>{" "}
        <li>
          <p>
            <span>Housing and Dining: </span>The cost of on-campus housing and
            dining varies depending on the type of accommodation and meal plan
            chosen by the student. It can range from approximately $17,000 to
            $22,000 per year.
          </p>
        </li>{" "}
        <li>
          <p>
            <span>Books and Supplies: </span>Students should budget for
            textbooks and supplies, which can amount to around $1,000 per year.
          </p>
        </li>
        <li>
          <p>
            <span>Health Insurance: </span>Harvard requires all students to have
            health insurance. Students can either enroll in the Harvard
            University Student Health Program (HUSHP) or provide proof of
            equivalent coverage.
          </p>
        </li>
        <li>
          <p>
            <span>Additional Expenses: </span>Miscellaneous expenses, such as
            personal expenses, transportation, and recreational activities,
            should also be factored into the overall cost of attending Harvard.
          </p>
        </li>
      </ol>
      <p>
        {" "}
        It{`'`}s important to note that Harvard{`'`}s financial aid program is
        robust and aims to meet the demonstrated financial need of admitted
        students. This commitment to affordability ensures that talented
        individuals from diverse backgrounds can pursue their education at
        Harvard without undue financial burden. In conclusion, Harvard
        University{`'`}s admission process is highly competitive, and it offers
        a wide range of courses across various disciplines. While the fees
        structure can be substantial, Harvard{`'`}s commitment to financial aid
        and accessibility ensures that students have the opportunity to receive
        a world-class education at this prestigious institution. Harvard{`'`}s
        legacy of academic excellence continues to shine brightly, attracting
        scholars and future leaders from around the world.{" "}
      </p>
    </section>
  );
};

export default aPage;
