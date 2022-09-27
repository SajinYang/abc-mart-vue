export const dollorsFormatFilter = {
  filters: {
    dollorsFormat (value) {
      if (value !== undefined) {
        return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
    }
  }
}
