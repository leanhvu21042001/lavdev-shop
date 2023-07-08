import { useMediaQuery } from '@chakra-ui/react';

/**
 *
 * @returns is larger than 768
 */
const useMediaQueryLargerTablet = () => {
  const [value] = useMediaQuery('(min-width: 768px)');
  return value;
};

/**
 *
 * @returns is larger than 1110
 */
const useMediaQueryLarger1110 = () => {
  const [value] = useMediaQuery('(min-width: 1110px)');
  return value;
};

/**
 *
 * @returns is larger than 1142
 */
const useMediaQueryLarger1142 = () => {
  const [value] = useMediaQuery('(min-width: 1142px)');
  return value;
};

/**
 *
 * @returns is larger than 940
 */
const useMediaQueryLarger940 = () => {
  const [value] = useMediaQuery('(min-width: 940px)');
  return value;
};

/**
 *
 * @returns is larger than 750
 */
const useMediaQueryLarger750 = () => {
  const [value] = useMediaQuery('(min-width: 750px)');
  return value;
};

export {
  useMediaQueryLargerTablet,
  useMediaQueryLarger1110,
  useMediaQueryLarger1142,
  useMediaQueryLarger940,
  useMediaQueryLarger750,
};
