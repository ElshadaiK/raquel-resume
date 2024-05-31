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

// Buttons page components
import ButtonsGradient from "layouts/sections/career-board/components/ButtonsGradient";
import ButtonsContained from "layouts/sections/career-board/components/ButtonsContained";
import ButtonsOutlined from "layouts/sections/career-board/components/ButtonsOutlined";
import ButtonsSizes from "layouts/sections/career-board/components/ButtonsSizes";
import ButtonsIconLeft from "layouts/sections/career-board/components/ButtonsIconLeft";
import ButtonsIconRight from "layouts/sections/career-board/components/ButtonsIconRight";

// Buttons page components code
import buttonsGradientCode from "layouts/sections/career-board/components/ButtonsGradient/code";
import buttonsContainedCode from "layouts/sections/career-board/components/ButtonsContained/code";
import buttonsOutlinedCode from "layouts/sections/career-board/components/ButtonsOutlined/code";
import buttonsSizesCode from "layouts/sections/career-board/components/ButtonsSizes/code";
import buttonsIconLeftCode from "layouts/sections/career-board/components/ButtonsIconLeft/code";
import buttonsIconRightCode from "layouts/sections/career-board/components/ButtonsIconRight/code";

function CareerBoard() {
  return (
    <BaseLayout
      title="Career Board"
      breadcrumb={[
        { label: "Career Board", route: "/sections/career-board" },
        { label: "Career Board" },
      ]}
    >
      <View title="Buttons gradient" code={buttonsGradientCode}>
        <ButtonsGradient />
      </View>
      <View title="Buttons contained" code={buttonsContainedCode}>
        <ButtonsContained />
      </View>
      <View title="Buttons outlined" code={buttonsOutlinedCode}>
        <ButtonsOutlined />
      </View>
      <View title="Buttons sizes" code={buttonsSizesCode}>
        <ButtonsSizes />
      </View>
      <View title="Buttons icon left" code={buttonsIconLeftCode}>
        <ButtonsIconLeft />
      </View>
      <View title="Buttons icon right" code={buttonsIconRightCode}>
        <ButtonsIconRight />
      </View>
    </BaseLayout>
  );
}

export default CareerBoard;
