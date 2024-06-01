import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Tooltips and popovers page components
import Portrait from "layouts/sections/works/photography/components/Portrait";
import Landscape from "layouts/sections/works/photography/components/Landscape";

// Tooltips and popovers page components code

function Photography() {
  return (
    <BaseLayout
      title="Captivating photographs that capture the essence of my designs, emphasizing the interplay between fashion and nature."
      breadcrumb={[
        { label: "Work", route: "/sections/works/photography" },
        { label: "Photography" },
      ]}
    >
      <View title="Landscape">
        <Landscape />
      </View>
      <View title="Portraits">
        <Portrait />
      </View>
    </BaseLayout>
  );
}

export default Photography;
