using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SquareWall
{
    public partial class Form2 : Form
    {
        private Form1 form1;
        public Form2(Form1 parentForm)
        {
            InitializeComponent();

            form1 = parentForm;
        }

        private void Form2_Load(object sender, EventArgs e)
        {
           form1.Show();
        }
        private void Form2_FormClosed(object sender, FormClosedEventArgs e)
        {
            // Quando Form2 viene chiuso, mostra nuovamente Form1
            form1.Show();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.BackColor = Color.Blue;

        }

    }

    
}
