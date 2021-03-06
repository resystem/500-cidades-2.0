import jobList from './lists/job/job.en-US';
import sexOrientationList from './lists/sex-orientation/sexOrientation.en-US';
import disabilityList from './lists/disability/disability.en-US';
import countryList from './lists/country/country.en-US';
import languageList from './lists/language/language.en-US';
import birthSignList from './lists/birth-sign/birthSign.en-US';
import statesList from './lists/states/states.en-US';
import raceList from './lists/race/race.en-US';
import genderList from './lists/gender/gender.en-US';
import educationList from './lists/education/education.en-US';

import activistForm from './components/activist-form/activistForm.en-US';
import activistModal from './components/activist-modal/activistModal.en-US';
import collectiveForm from './components/collective-form/collectiveForm.en-US';

export default {
  translations: {
    header: {
      map: 'Map',
      opportunities: 'Opportunities',
      about: 'About',
    },
    common: {
      back: 'Back'
    },
    logged_section: {
      profile: 'My Profile',
      edit_profile: 'Edit Profile',
      privacy_policy: 'Privacy Policy',
      faq: 'FAQ',
      logout: 'Logout',
    },
    disability_list: disabilityList,
    sex_orientation_list: sexOrientationList,
    job_list: jobList,
    country_list: countryList,
    language_list: languageList,
    birth_sign_list: birthSignList,
    br_state_list: statesList,
    race_list: raceList,
    gender_list: genderList,
    education_list: educationList,
    activist_form: activistForm,
    activist_modal: activistModal,
    collective_form: collectiveForm,
  }
}
