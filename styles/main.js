const tableRows = document.querySelectorAll('#regionTable tbody tr');
    const svgRegions = document.querySelectorAll('#map .region');

    // Обработчик кликов по строкам таблицы
    tableRows.forEach(row => {
      row.addEventListener('click', () => {
        const regionId = row.getAttribute('data-region');

        // Удаляем выделение со всех строк и областей
        tableRows.forEach(r => r.classList.remove('selected'));
        svgRegions.forEach(region => region.classList.remove('selected'));

        // Выделяем текущую строку и соответствующую область
        row.classList.add('selected');
        const selectedRegion = document.getElementById(regionId);
        if (selectedRegion) {
          selectedRegion.classList.add('selected');
        }
      });
    });

    // Обработчик кликов по областям SVG
    svgRegions.forEach(region => {
      region.addEventListener('click', () => {
        const regionId = region.getAttribute('id');

        // Удаляем выделение со всех строк и областей
        tableRows.forEach(r => r.classList.remove('selected'));
        svgRegions.forEach(r => r.classList.remove('selected'));

        // Выделяем текущую область и соответствующую строку
        region.classList.add('selected');
        const selectedRow = document.querySelector(`#regionTable tbody tr[data-region="${regionId}"]`);
        if (selectedRow) {
          selectedRow.classList.add('selected');
        }
      });
    });


    