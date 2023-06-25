import {StyleSheet} from 'react-native';
import {
  systemColor,
  systemFontSize,
  systemFontWeight,
  systemSpacing,
} from '../../../config/system';

const styles = StyleSheet.create({
  container: {
    padding: systemSpacing.base,
  },
  searchBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: systemSpacing.tiny,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: systemSpacing.small,
    backgroundColor: 'white',
    borderColor: systemColor.border,
    borderWidth: 1,
    borderRadius: 9999,
    // shadow
    shadowColor: systemColor.foggy,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: systemSpacing.tiny,
  },
  searchIcon: {
    borderRadius: 9999,
    padding: systemSpacing.tiny,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    ...systemFontSize.regular,
    fontWeight: systemFontWeight.semibold,
    color: systemColor.text,
  },
  subTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  subTitleTextContainer: {
    flex: 1,
    overflow: 'hidden',
  },

  bulletIcon: {
    color: systemColor.textLight,
    paddingHorizontal: systemSpacing.tiny,
  },
  subTitle: {
    flex: 1,
    ...systemFontSize.small,
    color: systemColor.textLight,
  },
  filterIcon: {
    borderWidth: 1,
    borderColor: systemColor.border,
    borderRadius: 9999,
    padding: systemSpacing.tiny,
  },
});

export const bulletUnicode = '\u2022';

export default styles;
