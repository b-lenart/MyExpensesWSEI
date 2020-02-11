using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MyExpenses.Models
{
    public class ExpenseDetail
    {
        [Key]
        public int ExpenseId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Description { get; set; }
        [Required]
        [Column(TypeName = "varchar(10)")]
        public string Date { get; set; }
        [Required]
        [Column(TypeName = "varchar(40)")]
        public string Type { get; set; }
        [Required]
        [Column(TypeName = "float")]
        public int Amount { get; set; }
        [Required]
        [Column(TypeName = "varchar(10)")]
        public string TransactionType { get; set; }
    }
}
