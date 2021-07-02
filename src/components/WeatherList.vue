<script>
  export default {
    data: () => ({
      desserts: [
        {
          name: 1,
          calories: 1,
          fat: 1,
          carbs: 1,
          protein: 4.0,
          iron: '1%',
        },
      ],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
    }),
  }

</script>