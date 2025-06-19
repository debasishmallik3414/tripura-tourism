'use client';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white ">
  <svg width="60" height="20" viewBox="0 0 120 30">
<circle cx="30" cy="15" r="10" fill="#60A5FA">
<animate attributeName="cy" from="15" to="15" dur="0.6s" begin="0s" repeatCount="indefinite" values="15;5;15" keyTimes="0;0.5;1"/>
</circle>
<circle cx="60" cy="15" r="10" fill="#60A5FA">
<animate attributeName="cy" from="15" to="15" dur="0.6s" begin="0.2s" repeatCount="indefinite" values="15;5;15" keyTimes="0;0.5;1"/>
</circle>
<circle cx="90" cy="15" r="10" fill="#60A5FA">
<animate attributeName="cy" from="15" to="15" dur="0.6s" begin="0.4s" repeatCount="indefinite" values="15;5;15" keyTimes="0;0.5;1"/>
</circle>
</svg>
    </div>
  );
};

export default Loader;
