import { LogoProps } from "./interfaces"

export function Logo(props: LogoProps) {
  const { color } = props
  return (
    <svg width='3rem' height='3rem' viewBox='0 0 136 140' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.6179 110.346L14.8043 107.613L14.8043 107.613L12.6179 110.346ZM124.938 110.346L122.752 107.613L122.752 107.613L124.938 110.346ZM40.9611 121.499L38.223 123.679L38.223 123.679L40.9611 121.499ZM95.2989 123.792L92.7542 121.389L95.2989 123.792ZM24.4102 82.6456C23.1099 84.0759 23.2153 86.2895 24.6456 87.5898C26.0759 88.8901 28.2895 88.7846 29.5898 87.3543L24.4102 82.6456ZM108.41 87.3543C109.71 88.7846 111.924 88.8901 113.354 87.5898C114.785 86.2895 114.89 84.0759 113.59 82.6456L108.41 87.3543ZM103.13 6.50261C104.625 5.2769 104.843 3.07157 103.617 1.57688C102.391 0.082191 100.186 -0.135857 98.6913 1.08986L103.13 6.50261ZM38.4385 1.08986C36.9438 -0.135857 34.7385 0.082191 33.5128 1.57688C32.2871 3.07157 32.5051 5.2769 33.9998 6.50261L38.4385 1.08986ZM97.5 39.5C97.5 55.5163 84.5163 68.5 68.5 68.5V75.5C88.3823 75.5 104.5 59.3823 104.5 39.5H97.5ZM68.5 68.5C52.4837 68.5 39.5 55.5163 39.5 39.5H32.5C32.5 59.3823 48.6177 75.5 68.5 75.5V68.5ZM39.5 39.5C39.5 23.4837 52.4837 10.5 68.5 10.5V3.5C48.6177 3.5 32.5 19.6177 32.5 39.5H39.5ZM68.5 10.5C84.5163 10.5 97.5 23.4837 97.5 39.5H104.5C104.5 19.6177 88.3823 3.5 68.5 3.5V10.5ZM37.6128 50.8696C29.8596 55.3294 16.122 64.4602 7.63629 75.3957C3.3905 80.8672 0.158615 87.1725 0.0622321 93.8463C-0.0372731 100.736 3.20682 107.3 10.4314 113.079L14.8043 107.613C8.89254 102.884 6.99956 98.2366 7.0615 93.9474C7.12657 89.442 9.35465 84.5995 13.1666 79.6871C20.7963 69.8547 33.5651 61.2733 41.1031 56.9374L37.6128 50.8696ZM10.4314 113.079C18.3749 119.434 30.6516 119.952 41.0286 112.852C51.4573 105.717 59.6886 91.202 61.0504 67.8374L54.0622 67.4301C52.7805 89.4214 45.1512 101.55 37.0759 107.075C28.9488 112.636 20.078 111.832 14.8043 107.613L10.4314 113.079ZM96.0792 56.5634C103.61 60.8952 116.479 69.5716 124.205 79.5035C128.068 84.4678 130.343 89.3636 130.437 93.9104C130.526 98.2333 128.652 102.893 122.752 107.613L127.125 113.079C134.361 107.29 137.578 100.693 137.435 93.7664C137.297 87.0639 134.019 80.7184 129.73 75.2052C121.155 64.1822 107.33 54.9594 99.5694 50.4956L96.0792 56.5634ZM122.752 107.613C117.478 111.832 108.608 112.636 100.48 107.075C92.4051 101.55 84.7758 89.4214 83.4941 67.4301L76.5059 67.8374C77.8677 91.202 86.099 105.717 96.5277 112.852C106.905 119.952 119.181 119.434 127.125 113.079L122.752 107.613ZM30.2619 113.68L38.223 123.679L43.6993 119.319L35.7381 109.32L30.2619 113.68ZM97.8436 126.195L108.045 115.393L102.955 110.587L92.7542 121.389L97.8436 126.195ZM38.223 123.679C53.1927 142.481 81.343 143.669 97.8436 126.195L92.7542 121.389C79.1777 135.766 56.0161 134.789 43.6993 119.319L38.223 123.679ZM44.4102 60.6456L24.4102 82.6456L29.5898 87.3543L49.5898 65.3543L44.4102 60.6456ZM88.4102 65.3543L108.41 87.3543L113.59 82.6456L93.5898 60.6456L88.4102 65.3543ZM92.4385 15.2701L103.13 6.50261L98.6913 1.08986L87.9998 9.85736L92.4385 15.2701ZM49.13 9.85736L38.4385 1.08986L33.9998 6.50261L44.6913 15.2701L49.13 9.85736ZM55 86.5H84.5V79.5H55V86.5ZM48 103.5H89.5V96.5H48V103.5ZM37 120.5H101V113.5H37V120.5Z'
        fill={color}
      />
    </svg>
  )
}
