/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Tooltips and popovers page components
import Popovers from "layouts/sections/attention-catchers/tooltips-popovers/components/Popovers";
import Tooltips from "layouts/sections/attention-catchers/tooltips-popovers/components/Tooltips";

// Tooltips and popovers page components code
import popoversCode from "layouts/sections/attention-catchers/tooltips-popovers/components/Popovers/code";
import tooltipsCode from "layouts/sections/attention-catchers/tooltips-popovers/components/Tooltips/code";

function Photography() {
  return (
    <BaseLayout
      title="Landscapes & Portraits"
      breadcrumb={[
        { label: "Work", route: "/sections/works/photography" },
        { label: "Photography" },
      ]}
    >
      <View title="Landscapes" code={popoversCode}>
        <Popovers />
      </View>
      <View title="Portraits" code={tooltipsCode}>
        <Tooltips />
      </View>
    </BaseLayout>
  );
}

export default Photography;
