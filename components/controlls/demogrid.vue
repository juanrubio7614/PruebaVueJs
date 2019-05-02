<template>
<table class="demogrid">
    <thead>
        <tr>
            <th v-for="column in columns" @click="sortBy(column)" :key="column" :class="{ active: sortKey == column }">
                {{ column | capitalize }}
                <span class="arrow" :class="sortOrders[column] > 0 ? 'asc' : 'dsc'">
          </span>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="entry in filteredDataRows" :key="entry">
            <td v-for="key in columns" :key="key" @click="toggleEdit(key)">
                <span v-if="!isEditMode">{{entry[key]}}</span>
                <input v-else type="text" :value="entry[key]" />
            </td>
        </tr>
    </tbody>
</table>
</template>

<script>
export default {
    props: {
        dataRows: Array,
        columns: Array,
        filterKey: String,
    },
    data() {
        var sortOrders = {};
        this.columns.forEach(function (key) {
            sortOrders[key] = 1
        })
        return {
            sortKey: '',
            sortOrders: sortOrders,
            isEditMode:false
        }

    },
    computed: {
        filteredDataRows() {
            var sortKey = this.sortKey
            var filterKey = this.filterKey && this.filterKey.toLowerCase()
            var order = this.sortOrders[sortKey] || 1
            var dataRows = this.dataRows
            if (filterKey) {
                dataRows = dataRows.filter(function (row) {
                    return Object.keys(row).some(function (key) {
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                    })
                })
            }
            if (sortKey) {
                dataRows = dataRows.slice().sort(function (a, b) {
                    a = a[sortKey]
                    b = b[sortKey]
                    return (a === b ? 0 : a > b ? 1 : -1) * order
                })
            }
            return dataRows
        }
    },
    filters: {
        capitalize: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    },
    methods: {
      toggleEdit(key){
        this.isEditMode = !this.isEditMode;
      },
        sortBy(key) {
          this.$emit('onEventoComponente')
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
        }
    }
}
</script>

<style lang="scss">
.demogrid {

    table {
        border: 2px solid #42b983;
        border-radius: 3px;
        background-color: #fff;
    }

    th {
        background-color: #42b983;
        color: rgba(255, 255, 255, 0.66);
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    td {
        background-color: #f9f9f9;
    }

    th,
    td {
        min-width: 120px;
        padding: 10px 20px;
    }

    th.active {
        color: #fff;
    }

    th.active .arrow {
        opacity: 1;
    }

    .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: 0.66;
    }

    .arrow.asc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #fff;
    }

    .arrow.dsc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #fff;
    }
}
</style>
