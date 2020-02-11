using Microsoft.EntityFrameworkCore.Migrations;

namespace MyExpenses.Migrations
{
    public partial class ChangeDataType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Amount",
                table: "ExpenseDetails",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(20)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Amount",
                table: "ExpenseDetails",
                type: "varchar(20)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
